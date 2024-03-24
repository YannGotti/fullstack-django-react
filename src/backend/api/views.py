from django.shortcuts import render
from rest_framework.views import APIView
from .models import Streamer, StreamerAttribute
from .serializer import StreamerSerializer, StreamerAttributeSerializer
from rest_framework.response import Response
from .service import getStreamer

class StreamersView(APIView):
    def get(self, request):
        filter = request.GET.get('filter')
        streamers = getStreamer(filter, request)
        return Response(streamers)

        
    
    def post(self,request):
        serializer = StreamerSerializer(data=request.data, context={'request': request})
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)


class GetAttributesStreamer(APIView):
    def get(self, request):
        try:
            name = request.GET.get('name')
            filter_value = request.GET.get('filter')

            streamer = Streamer.objects.get(name=name)
            attributes = StreamerAttribute.objects.filter(streamer=streamer, filter=filter_value)
            serializer = StreamerAttributeSerializer(attributes, many=True, context={'request': request})
            
            return Response(serializer.data, status=200)
        except Streamer.DoesNotExist:
            return Response({'error': 'Такого пользователя не существует.'}, status=404)

            
                

            