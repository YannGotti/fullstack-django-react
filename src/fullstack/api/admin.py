from django.contrib import admin
from .models import Streamer

@admin.register(Streamer)
class StreamerAdminPanel(admin.ModelAdmin):
    list_display = ('name', 'fullname', 'age', 'description', 'video_preview')
