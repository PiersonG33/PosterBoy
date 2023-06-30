from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from django.db.models import Q
from switchboard.models import Boards, UserStatus

# Create your views here.
def getboard(request):
    board_name = request.GET.get('board_name', '')
    try:
        boards = Boards.objects.filter(Q(name__icontains=board_name))
        board_list = []
        for board in boards:
            try:

                status = get_object_or_404(UserStatus, boardid=board, userid=request.user)
                status_data = {
                    'role': status.role,
                }
            except UserStatus.DoesNotExist:
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
