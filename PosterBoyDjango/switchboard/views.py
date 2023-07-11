from django.shortcuts import render, get_object_or_404, get_list_or_404
from django.http import JsonResponse, HttpResponse
from django.db.models import Q
from switchboard.models import Boards, Userstatus

# Create your views here.

def index(request):
    return HttpResponse('<h1>Django Include URLS</h1>')

def getboard(request, board_name):
    try:
        #boards = Boards.objects.filter(Q(name__icontains=board_name))
        #boards = Boards.objects.get(topic_name = board_name)
        boards = get_list_or_404(Boards, Q(topic_name__iexact = board_name))
        board_list = []
        for board in boards:
            try:
                status = get_object_or_404(Userstatus, boardid=1, userid=request.user.id)
                print("Hey")
                status_data = {
                    'role': status.role,
                }
            except Userstatus.DoesNotExist:
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
