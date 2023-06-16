from django.db import models

# Create your models here.
class Post(models.Model):
    message = models.CharField(max_length=200)
    uid = models.IntegerField()
    pid = models.IntegerField()
    boardid = models.IntegerField()
    color = models.IntegerField()
    date = models.DateTimeField(auto_now_add=True) # Don't know what this tag means
    score = models.IntegerField()
    coords = models.PointField()

    def __str__(self):
        return self.message

