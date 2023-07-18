from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name = 'home'),
    path('getboard/<str:board_name>/', views.getboard, name = 'getboard'),
]