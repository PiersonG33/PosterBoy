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
    #How does this get from database tho lol
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
        return JsonResponse(data, safe=False)

    else:
        data = {
            'error': 'Invalid request method'
        }
        return JsonResponse(data, status=405)


def add_post(request):
    if request.method == 'POST':
        post_data = request.json()
        post = Post.objects.create(
            message=post_data['message'],
            uid=post_data['uid'],
            pid=post_data['pid'],
            boardid=post_data['boardid'],
            color=post_data['color'],
            date=post_data['date'],
            score=post_data['score'],
            coords=post_data['coords']
        )
        return JsonResponse(post_data, status=201)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)