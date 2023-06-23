from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Post, Board, UserActions, UserStatus, PostArchive


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
        post.save()
        action = UserActions.objects.create(
            action="add",
            uid=post_data['uid'],
            pid=post_data['pid'],
            date=post_data['date']
        )
        action.save()
        return JsonResponse(post_data, status=201)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)
    
def lower_score(request, pid):
    #this removes posts by pid
    #this comment is useless
    try:
        post = Post.objects.get(pid=pid)
        # The request should specify the user deleting the post and the date
        user_data = request.json()
        theUID = user_data['uid']
        theDate = user_data['date']
        action = UserActions.objects.create(
            action="delete",
            uid=theUID,
            pid=post.pid,
            date=theDate
        )
        action.save()
        #post.delete()
        return JsonResponse({'message': 'Post deleted successfully'}, status=200)
    except Post.DoesNotExist:
        return JsonResponse({'error': 'Post does not exist'}, status=404)
    
def get_user_actions(request, uid, boardid):
    #this gets all actions by a user on a board
    if request.method == 'GET':
        actions = UserActions.objects.filter(uid=uid, boardid=boardid)
        data = [
            {
                'actionid': action.actionid,
                'uid': action.uid,
                'pid': action.pid,
                'action': action.action,
                'date': action.date
            }
            for action in actions
        ]
        return JsonResponse(data, safe=False)
    else:
        data = {
            'error': 'Invalid request method'
        }
        return JsonResponse(data, status=405)
