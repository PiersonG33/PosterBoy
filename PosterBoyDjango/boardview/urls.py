from django.urls import path, include
<<<<<<< Updated upstream
from . import views
urlpatterns=[
  path('',views.index, name="index")
=======

from . import views

urlpatterns = [
    path("", views.index, name="index"),
>>>>>>> Stashed changes
]