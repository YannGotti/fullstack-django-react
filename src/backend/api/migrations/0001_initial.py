# Generated by Django 5.0.3 on 2024-03-20 13:40

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Streamer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('fullname', models.CharField(max_length=100)),
                ('age', models.CharField(max_length=2)),
                ('desctiption', models.TextField()),
                ('video_preview', models.FileField(upload_to='')),
            ],
        ),
    ]