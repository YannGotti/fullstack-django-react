# Generated by Django 5.0.3 on 2024-03-24 20:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_streamerattribute_filter'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='streamer',
            options={'verbose_name': 'Стример', 'verbose_name_plural': 'Стримеры'},
        ),
    ]