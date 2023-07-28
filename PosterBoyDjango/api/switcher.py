from django.shortcuts import render, get_object_or_404, get_list_or_404
from django.http import JsonResponse, HttpResponse
from django.db.models import Q
from django.core import serializers
from .models import Posts, Boards, UserActions, UserStatus, PostArchive
from .views import *
from rest_framework.decorators import api_view


#Decorator shenanagins
def allow_get_only(view_func):
    decorated_view = api_view(["GET"])(view_func)
    return decorated_view

@allow_get_only    
def getboard(request, board_name, user_id):
    try:
        #boards = Boards.objects.filter(Q(name__icontains=board_name))
        #boards = Boards.objects.get(topic_name = board_name)
        boards = get_list_or_404(Boards, Q(topic_name__iexact = board_name))
        # if not boards.exists():
        #     return None
        
        #user_status = UserStatus.objects.filter(user__userid=user_id)
        board_list = []
        for board in boards:
            try:
                status = UserStatus.objects.get(boardid=board, userid=user_id)
                #status = get_object_or_404(UserStatus, boardid=board, userid=user_id)
                status_data = {
                    'role': status.role,
                }
            except UserStatus.DoesNotExist:
                continue
                status_data = {}
                

            board_data = {
                'boardid': board.id,
                'name': board.topic_name,
                'actions': board.actions,
                'reset': board.reset,
                'status': status_data
            }
            
            board_list.append(board_data)
        
        if board_list:
            response_data = {
                'boards': board_list
            }
            
            return JsonResponse(response_data)
        else:
            return JsonResponse({'error': 'No boards with similar names found'}, status = 404)
    except Boards.DoesNotExist:
        return JsonResponse({'error': 'Board not found'}, status=404)