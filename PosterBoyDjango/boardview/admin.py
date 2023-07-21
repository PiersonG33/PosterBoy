from django.contrib import admin

# Register your models here.
from .models import Posts, Boards, UserActions, UserStatus, PostArchive
"""
@admin.register(Posts)
class PostsAdmin(admin.ModelAdmin):
    list_display = ('id', 'message', 'message_type', 'userid', 'boardid', 'color', 'date', 'score', 'x', 'y')
    list_filter = ('message_type', 'userid', 'boardid', 'date', 'score')
    search_fields = ('message', 'date')

admin.site.register(Posts, PostsAdmin)

@admin.register(Boards)
class BoardsAdmin(admin.ModelAdmin):
    list_display = ('id', 'topic_name', 'actions')
    list_filter = ('topic_name')
    search_fields = ('topic_name')
admin.site.register(Boards,BoardsAdmin)
"""