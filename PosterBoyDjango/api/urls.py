from django.urls import path
from . import views, switcher

urlpatterns = [
    path('', views.index, name = 'home'),
    path('getboard/<str:board_name>/<int:user_id>/', switcher.getboard, name = 'getboard'),
]