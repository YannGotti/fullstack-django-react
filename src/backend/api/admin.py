from django.contrib import admin
from .models import Streamer, StreamerAttribute

@admin.register(Streamer)
class StreamerAdminPanel(admin.ModelAdmin):
    list_display = ('name', 'is_active')

@admin.register(StreamerAttribute)
class StreamerAttributeAdminPanel(admin.ModelAdmin):
    list_display = ('filter', 'streamer')