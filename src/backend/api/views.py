from django.shortcuts import render
from rest_framework.views import APIView
from .models import Streamer
from .serializer import StreamerSerializer
from rest_framework.response import Response
from .service import getStreamer

class StreamersView(APIView):
    def get(self, request):
        filter = request.GET.get('filter')
        streamers = getStreamer(filter)
        return Response(streamers)

        
    
    def post(self,request):
        serializer = StreamerSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

