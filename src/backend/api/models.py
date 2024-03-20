from django.db import models

class Streamer(models.Model):
    name = models.CharField(max_length=100)
    fullname = models.CharField(max_length=100)
    age = models.CharField(max_length=2)
    description = models.CharField(max_length=300)
    video_preview = models.FileField(upload_to='video_previews/')
    twitch_url = models.URLField(null=True)
    youtube_url = models.URLField(null=True)
    instagram_url = models.URLField(null=True)
