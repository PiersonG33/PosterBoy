from django.db import models
from django.contrib.auth.models import User

# Create your models here.
    

class Boards(models.Model):
    id = models.IntegerField()
    topic_name = models.TextField(max_length=50)
    actions = models.IntegerField()
    reset = models.DurationField()

    def __str__(self):
        return self.topic_name

class UserStatus(models.Model):
    userid = models.ForeignKey(User, on_delete=models.CASCADE)
    boardid = models.IntegerField()
    role = models.TextField(max_length=10)

    def __str__(self):
        return "{self.userid.username} - {self.boardid.topic_name} - {self.role}"
