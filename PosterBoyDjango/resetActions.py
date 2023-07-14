import psycopg2
import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'PosterBoyDjango.settings')
import django
import random
django.setup()
from PosterBoyDjango.settings import DATABASES
from django.contrib.auth.models import User
from datetime import datetime, timezone

database = DATABASES['default']
connection = psycopg2.connect(user=database['USER'],
                                  password=database['PASSWORD'],      
                                  host=database['HOST'],
                                  port=database['PORT'],
                                  database=database['NAME'])

cursor = connection.cursor()
cursor.execute("SELECT actionReset();")
connection.commit()
cursor.close()
connection.close()

