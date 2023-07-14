from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Posts, Boards, UserActions, UserStatus, PostArchive
from rest_framework.decorators import api_view

#Decorator shenanagins
def allow_get_only(view_func):
    decorated_view = api_view(["GET"])(view_func)
    return decorated_view

def allow_post_only(view_func):
    decorated_view = api_view(["POST"])(view_func)
    return decorated_view

@csrf_exempt
@allow_get_only
def get_posts(request):
    #How does this get from database tho lol
    if request.method == 'GET':
        bid = request.GET.get('boardid')
        posts = Posts.objects.filter(boardid=bid)

        data = [
            {
                'message': post.message,
                'message_type': post.message_type,
                'userid': post.userid,
                'id': post.id,
                #'boardid': post.boardid,
                'color': post.color,
                'date': post.date,
                'score': post.score,
                'x': post.x,
                'y': post.y

            }
            for post in posts
        ]
        return JsonResponse(data, safe=False)

    else:
        data = {
            'error': 'Invalid request method'
        }
        return JsonResponse(data, status=405)

@allow_post_only
def add_post(request):
    if request.method == 'POST':
        post_data = request.json()
        post = Posts.objects.create(
            message=post_data['message'],
            message_type=post_data['message_type'],
            userid=post_data['userid'],
            # id=post_data['id'], #The ID is automatically generated
            boardid=post_data['boardid'],
            color=post_data['color'],
            date=post_data['date'],
            score=post_data['score'],
            x=post_data['x'],
            y=post_data['y']
        )
        post.save()
        action = UserActions.objects.create(
            action="add",
            userid=post_data['userid'],
            postid=post.id, #The ID is the automatically generated from the post
            # date=post_data['date'] //Default date is current
        )
        action.save()
        return JsonResponse(post_data, status=201)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)
    
@allow_post_only
def lower_score(request, pid):
    #this removes posts by pid
    #this comment is useless
    try:
        post = Posts.objects.get(pid=pid)
        # The request should specify the user deleting the post and the date
        user_data = request.json()
        theUID = user_data['userid']

        action = UserActions.objects.create(
            action="demote", #This might not be right
            userid=theUID,
            postid=post.postid,
        )
        action.save()
        #post.delete()
        return JsonResponse({'message': 'Post deleted successfully'}, status=200)
    except Posts.DoesNotExist:
        return JsonResponse({'error': 'Post does not exist'}, status=404)

@allow_get_only  
def get_user_actions(request, uid, boardid):
    #this gets all actions by a user on a board
    if request.method == 'GET':
        actions = UserActions.objects.filter(uid=uid, boardid=boardid)
        data = [
            {
                'id': action.id,
                'uid': action.userid,
                'pid': action.postid,
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