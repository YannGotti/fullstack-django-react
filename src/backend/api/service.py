from .models import Streamer
from .serializer import StreamerSerializer


def getStreamer(filter):
    if (filter == 'all'):
        serializer = StreamerSerializer(Streamer.objects.all(), many=True)
        return serializer.data
    else:
        serializer = StreamerSerializer(Streamer.objects.get(name=filter))
        return serializer.data