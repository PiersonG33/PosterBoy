from django.urls import path, include
<<<<<<< Updated upstream
from . import views
from api.views import note
from boardview.views import index

urlpatterns=[
  path('',note, name="boardview"),
=======

from . import views

urlpatterns = [
    path("", views.index, name="index"),
>>>>>>> Stashed changes
]