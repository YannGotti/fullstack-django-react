from rest_framework import serializers
from .models import Streamer

class StreamerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Streamer
        fields = ['name', 'fullname', 'age', 'description', 'video_preview', 'twitch_url', 'youtube_url', 'instagram_url']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        if representation['video_preview']:
            representation['video_preview'] = 'http://127.0.0.1:8000' + representation['video_preview']
        return representation