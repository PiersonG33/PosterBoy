import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'PosterBoyDjango.settings')
import django
django.setup()
from django.contrib.auth.models import User
from api.models import *

UserActions.objects.all().delete()

UserStatus.objects.all().delete()

Posts.objects.all().delete()

Boards.objects.all().delete()

User.objects.all().delete()