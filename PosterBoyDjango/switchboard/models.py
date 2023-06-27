from django.db import models
from django.contrib.auth.models import User

# Create your models here.
    

class Boards(models.Model):
    topic_name = models.CharField(max_length=50, blank=True, null=True)
    actions = models.IntegerField(blank=True, null=True)
    reset = models.DurationField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'boards'

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

class Userstatus(models.Model):
    userid = models.OneToOneField(AuthUser, models.DO_NOTHING, db_column='userid', primary_key=True)  # The composite primary key (userid, boardid) found, that is not supported. The first column is selected.
    boardid = models.ForeignKey(Boards, models.DO_NOTHING, db_column='boardid')
    role = models.CharField(max_length=10, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'userstatus'
        unique_together = (('userid', 'boardid'),)
