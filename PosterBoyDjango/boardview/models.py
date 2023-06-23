from django.db import models
from django.utils import timezone

# Create your models here.
class Post(models.Model):
    message = models.CharField(max_length=200)
    uid = models.IntegerField()
    pid = models.IntegerField()
    boardid = models.IntegerField()
    color = models.IntegerField()
    date = models.DateTimeField(default=timezone.now) # set default creation date to whenever model is created
    score = models.IntegerField(default=1) # posts start with a score of 1
    xCoord = models.IntegerField()
    yCoord = models.IntegerField()

    def __str__(self):
        return self.message
    

class Board(models.Model):
    boardid = models.IntegerField()
    topic_name = models.CharField(max_length=50)
    actions = models.IntegerField()
    reset = models.DurationField()

    def __str__(self):
        return self.topic_name
    
class UserActions(models.Model):
    actionid = models.IntegerField()
    uid = models.IntegerField()
    pid = models.IntegerField()
    action = models.CharField(max_length=10)
    date = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return str(self.uid) + self.action
    
class UserStatus(models.Model):
    uid = models.IntegerField()
    boardid = models.IntegerField()
    status = models.CharField(max_length=10)

    def __str__(self):
        return str(self.uid) + self.status
    
class PostArchive(models.Model):
    message = models.CharField(max_length=200)
    uid = models.IntegerField()
    pid = models.IntegerField()
    boardid = models.IntegerField()
    color = models.IntegerField()
    date = models.DateTimeField()
    score = models.IntegerField(default=1) # posts start with a score of 1
    xCoord = models.IntegerField()
    yCoord = models.IntegerField()

    def __str__(self):
        return self.message