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

    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f'{self.name}'

    class Meta:
        verbose_name = 'Стример'
        verbose_name_plural = 'Стримеры'

class StreamerAttribute(models.Model):

    CHOICES = (
        ('animations', 'Анимация'),
        ('cloth', 'Одежда'),
    )

    filter = models.CharField(max_length=10, choices=CHOICES)

    streamer = models.ForeignKey(Streamer, on_delete=models.CASCADE)

    video_attribute = models.FileField(upload_to='video_attribute/')

    def get_upload_path(instance, filename):
        return f'video_attribute/{instance.streamer.name}/{filename}'

    video_attribute = models.FileField(upload_to=get_upload_path)
