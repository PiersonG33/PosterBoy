from django.urls import path, include
from . import views
from api.views import note
from boardview.views import index

urlpatterns=[
  path('',note, name="boardview"),
]