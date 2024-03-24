from rest_framework import serializers
from .models import Streamer, StreamerAttribute

class StreamerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Streamer
        fields = ['id', 'name', 'fullname', 'age', 'description', 'video_preview', 'twitch_url', 'youtube_url', 'instagram_url']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        video_preview = representation.get('video_preview')

        # Проверяем, что video_preview не является пустым и не содержит полный URL
        if video_preview and not video_preview.startswith('http'):
            request = self.context.get('request')
            current_domain = request.build_absolute_uri('/')[:-1]  # Получаем текущий домен
            representation['video_preview'] = current_domain + video_preview

        return representation
    


class StreamerAttributeSerializer(serializers.ModelSerializer):
    streamer = serializers.StringRelatedField()

    class Meta:
        model = StreamerAttribute
        fields = ['filter', 'video_attribute', 'streamer']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        video_attribute = representation.get('video_attribute')

        if video_attribute and not video_attribute.startswith('http'):
            request = self.context.get('request')
            current_domain = request.build_absolute_uri('/')[:-1]  
            representation['video_attribute'] = current_domain + video_attribute

        return representation

        