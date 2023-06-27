from django.db import models
from django.utils import timezone

# Create your models here.

class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.BooleanField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.BooleanField()
    is_active = models.BooleanField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


    

class Boards(models.Model):
    topic_name = models.CharField(max_length=50, blank=True, null=True)
    actions = models.IntegerField(blank=True, null=True)
    reset = models.DurationField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'boards'

class Posts(models.Model):
    userid = models.ForeignKey(AuthUser, models.DO_NOTHING, db_column='userid', blank=True, null=True)
    boardid = models.ForeignKey(Boards, models.DO_NOTHING, db_column='boardid', blank=True, null=True)
    message = models.CharField(max_length=200, blank=True, null=True)
    message_type = models.IntegerField(blank=True, null=True)
    date = models.DateTimeField(blank=True, null=True)
    color = models.IntegerField(blank=True, null=True)
    score = models.IntegerField(blank=True, null=True)
    x = models.IntegerField(blank=True, null=True)
    y = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'posts'


class Useractions(models.Model):
    postid = models.ForeignKey(Posts, models.DO_NOTHING, db_column='postid', blank=True, null=True)
    userid = models.ForeignKey(AuthUser, models.DO_NOTHING, db_column='userid', blank=True, null=True)
    boardid = models.ForeignKey(Boards, models.DO_NOTHING, db_column='boardid', blank=True, null=True)
    action = models.CharField(max_length=10, blank=True, null=True)
    date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'useractions'

class Userstatus(models.Model):
    userid = models.OneToOneField(AuthUser, models.DO_NOTHING, db_column='userid', primary_key=True)  # The composite primary key (userid, boardid) found, that is not supported. The first column is selected.
    boardid = models.ForeignKey(Boards, models.DO_NOTHING, db_column='boardid')
    role = models.CharField(max_length=10, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'userstatus'
        unique_together = (('userid', 'boardid'),)

    
class Postarchive(models.Model):
    id = models.IntegerField(primary_key=True)
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