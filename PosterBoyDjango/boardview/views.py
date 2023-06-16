from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Post


# Create your views here.
from django.http import HttpResponse


def index(request):
    return HttpResponse("Hello, world. You're at the BoardView index.")

@csrf_exempt
def get_posts(request):
    if request.method == 'GET':
        bid = request.GET.get('boardid')
        posts = Post.objects.filter(boardid=bid)

        data = [
            {
                'message': post.message,
                'uid': post.uid,
                'pid': post.pid,
                #'boardid': post.boardid,
                'color': post.color,
                'date': post.date,
                'score': post.score,
                'coords': post.coords

            }
            for post in posts
        ]

    else:
        data = {
            'error': 'Invalid request method'
        }
        return JsonResponse(data, status=405)

