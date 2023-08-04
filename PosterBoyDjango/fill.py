import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'PosterBoyDjango.settings')
import django
import random
django.setup()
from django.contrib.auth.models import User
import datetime
from api.models import *

def generateWord(maxLen):
    len = random.randint(6, maxLen)
    out = "a"
    for i in range(len):
        char = chr(random.randint(32, 126))
        if(char.isalnum()):
            out += char
    return out


# USER - 10
for i in range(10):
    username = generateWord(30)
    email=generateWord(20)+'@'+generateWord(10)+".com"
    password=generateWord(55)
    
    user = User.objects.create_user(username,email,password)

# BOARD - 3
intervalUnits = ["minute", "hour", "day"]
topics = ["One", "Two", "Three"]
for i in range(3):
    topic = topics[i]
    actionCount = random.randint(2, 4)
    intervalNum = random.randint(1, 10)
    board = Boards.objects.create(
        topic_name=topic,
        actions=actionCount,
        reset=datetime.timedelta(hours=intervalNum)
    )
    board.save()

# POST - 10 on each
users = User.objects.all()
boards = Boards.objects.all()

# #start here
for board in boards:
    for user in users:
        post = Posts.objects.create(
            message = generateWord(200),
            message_type = 0,
            userid = user,
            boardid = board,
            color = random.randint(0,10),
            x = random.randint(0,2300),
            y = random.randint(0,1800)
        )
        post.save()
        UserActions.objects.create(
            action = "add",
            userid = user,
            postid = post
        ).save()

# Status - 10
for board in boards:
    for user in users:
        UserStatus.objects.create(
            userid = user,
            boardid = board,
            role = 'user'
        ).save()