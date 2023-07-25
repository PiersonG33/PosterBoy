from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

# Create your models here.

class Boards(models.Model):
    id = models.AutoField(primary_key=True)
    topic_name = models.CharField(max_length=50, blank=True, null=True)
    actions = models.IntegerField(blank=True, null=True)
    reset = models.DurationField(blank=True, null=True)

    def __str__(self):
        return self.topic_name
    
    class Meta:
        managed = False
        db_table = 'boards'

class Posts(models.Model):
    id = models.AutoField(primary_key=True)
    userid = models.ForeignKey(User, models.DO_NOTHING, db_column='userid', blank=True, null=True)
    boardid = models.ForeignKey(Boards, models.DO_NOTHING, db_column='boardid', blank=True, null=True)
    date = models.DateTimeField(blank=True, null=True, default=timezone.now) # set default creation date to whenever model is created
    message = models.CharField(max_length=200, blank=True, null=True)
    message_type = models.IntegerField(blank=True, null=True)
    color = models.IntegerField(blank=True, null=True)
    score = models.IntegerField(blank=True, null=True, default=1)
    x = models.IntegerField(blank=True, null=True)
    y = models.IntegerField(blank=True, null=True)

    def __str__(self):
        return self.message
    
    class Meta:
        managed = False
        db_table = 'posts'
    
class UserActions(models.Model):
    id = models.AutoField(primary_key=True)
    userid = models.ForeignKey(User, models.DO_NOTHING, db_column='userid', blank=True, null=True)
    postid = models.ForeignKey(Posts, models.DO_NOTHING, db_column='postid', blank=True, null=True)
    boardid = models.ForeignKey(Boards, models.DO_NOTHING, db_column='boardid', blank=True, null=True)
    action = models.CharField(max_length=10, blank=True, null=True)
    date = models.DateTimeField(default=timezone.now, blank=True, null=True)

    def __str__(self):
        return str(self.uid) + self.action
    
    class Meta:
        managed = False
        db_table = 'useractions'
    
class UserStatus(models.Model):
    userid = models.OneToOneField(User, models.DO_NOTHING, db_column='userid', primary_key=True)  
    # ^^^The composite primary key (userid, boardid) found, that is not supported. The first column is selected.
    boardid = models.ForeignKey(Boards, models.DO_NOTHING, db_column='boardid')
    role = models.CharField(max_length=10, blank=True, null=True)

 
    class Meta:
        managed = False
        db_table = 'userstatus'
        unique_together = (('userid', 'boardid'),)
    
class PostArchive(models.Model):
    id = models.AutoField(primary_key=True)
    userid = models.IntegerField(blank=True, null=True)
    boardid = models.IntegerField(blank=True, null=True)
    message = models.CharField(max_length=200, blank=True, null=True)
    message_type = models.IntegerField(blank=True, null=True)
    date = models.DateTimeField(blank=True, null=True)
    color = models.IntegerField(blank=True, null=True)
    x = models.IntegerField(blank=True, null=True)
    y = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'postarchive'

    def __str__(self):
        return self.message
