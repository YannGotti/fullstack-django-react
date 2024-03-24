from .models import Streamer
from .serializer import StreamerSerializer


def getStreamer(filter, request):
    if (filter == 'all'):
        serializer = StreamerSerializer(Streamer.objects.filter(is_active=True), many=True, context={'request': request})
        return serializer.data
    else:
        serializer = StreamerSerializer(Streamer.objects.get(name=filter), context={'request': request})
        return serializer.data