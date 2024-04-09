from django.db import models

class Movie(models.Model):
    id = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=200)
    year_published = models.IntegerField(default=2000)
    poster_path = models.CharField(max_length=200, default='')