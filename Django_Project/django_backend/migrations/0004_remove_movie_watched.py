# Generated by Django 5.0.4 on 2024-04-09 16:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('django_backend', '0003_remove_movie_data_url_movie_poster_path_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='movie',
            name='watched',
        ),
    ]
