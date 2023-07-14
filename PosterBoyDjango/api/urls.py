from django.urls import path
from . import views, switcher, boardviewer

urlpatterns = [
    path('', views.index, name = 'home'),
    path('getboard/<str:board_name>/', switcher.getboard, name = 'getboard'),
    path('get_posts/<int:bid>', boardviewer.get_posts, name = 'get_posts'),
    path('add_post', boardviewer.add_post, name = 'add_post'),
    path('lower_score/<int:pid>', boardviewer.lower_score, name = 'lower_score'),
    path('get_user_actions/<int:uid>/<int:boardid>', boardviewer.get_user_actions, name = 'get_user_actions'),
]