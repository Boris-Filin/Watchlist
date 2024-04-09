from django.urls import path
from . import views

urlpatterns = [
    path('watchlist/', views.movies_on_watchlist, name='watchlist'),
    path('add_movie', views.add_to_watchlist, name='add movie'),
    path('remove_movie', views.remove_from_watchlist, name='remove movie')
]