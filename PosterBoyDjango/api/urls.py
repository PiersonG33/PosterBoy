from django.urls import path
from . import views, switcher, boardviewer

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# TESTING PURPOSES \/
from django.urls import path
from . import views, switcher, boardviewer
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# TESTING PURPOSES \/
urlpatterns = [
    # existing URL patterns
    #path('search_boards/<str:query>/', views.search_boards, name='search_boards'),
]
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

urlpatterns = [
    path('', views.index, name = 'home'),
    path('board/<str:board_name>/<int:user_id>/', switcher.getboard, name = 'getboard'),
    # path('get_posts/<int:bid>', boardviewer.get_posts, name = 'get_posts'),
    # path('add_post', boardviewer.add_post, name = 'add_post'),
    path('posts/<int:bid>/', boardviewer.posts, name = 'posts'),
    # path('lower_score/<int:pid>', boardviewer.lower_score, name = 'lower_score'),
    # path('get_user_actions/<int:uid>/<int:boardid>', boardviewer.get_user_actions, name = 'get_user_actions'),
    path('useractions/<int:uid>/<int:boardid>', boardviewer.useractions, name = 'useractions'),
    # ^ uid = pid if user is posting
]