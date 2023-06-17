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

