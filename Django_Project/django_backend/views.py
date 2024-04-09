from django.shortcuts import render
from django.forms.models import model_to_dict
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Movie
from json import dumps

@api_view(['GET'])
def movies_on_watchlist(request):
    movies_list = [model_to_dict(m) for m in Movie.objects.all()]
    json_data = dumps(movies_list)

    return Response({'message': json_data})

@api_view(['PUT'])
def add_to_watchlist(request):
    data = request.data
    print(data)
    year_published = data.get('year_published')
    if not year_published: year_published = 2000
    poster_path = data.get('poster_path')
    if not poster_path: poster_path = ''
    try:
        movie = Movie(
            id = data['id'],
            title = data['title'],
            year_published = year_published,
            poster_path = poster_path,
        )
        movie.save()
    except:
        return Response(status=400)
    return Response(status=200)

@api_view(['PUT'])
def remove_from_watchlist(request):
    print(request.data)
    data = request.data
    try:
        movie_id = data['id']
        movie = Movie.objects.get(pk=movie_id)
        if movie is not None:
            movie.delete()
    except:
        pass
    return Response(status=200)
