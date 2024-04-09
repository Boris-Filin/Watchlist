# Generated by Django 5.0.4 on 2024-04-09 16:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('django_backend', '0002_remove_movie_date_published_movie_year_published'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='movie',
            name='data_url',
        ),
        migrations.AddField(
            model_name='movie',
            name='poster_path',
            field=models.CharField(default='', max_length=200),
        ),
        migrations.AlterField(
            model_name='movie',
            name='id',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
    ]
