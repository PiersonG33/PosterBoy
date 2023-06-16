from django.shortcuts import render
<<<<<<< Updated upstream
from django.http import HttpResponse

# Create your views here.

def index(request):
    return HttpResponse("This is the board")
=======
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt


# Create your views here.
from django.http import HttpResponse


def index(request):
    return HttpResponse("Hello, world. You're at the BoardView index.")

@csrf_exempt
def get_posts(request):
    pass
>>>>>>> Stashed changes
