import psycopg2
import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'PosterBoyDjango.settings')
import django
import random
django.setup()
from PosterBoyDjango.settings import DATABASES
from django.contrib.auth.models import User
from datetime import datetime, timezone
import time

database = DATABASES['default']
connection = psycopg2.connect(user=database['USER'],
                                  password=database['PASSWORD'],      
                                  host=database['HOST'],
                                  port=database['PORT'],
                                  database=database['NAME'])

cursor = connection.cursor()
cursor.execute("Select id from boards;")
connection.commit()
IDs = cursor.fetchall()

for i in IDs:
    cursor.execute("SELECT actionReset(" + str(i[0]) + ");")
connection.commit()

cursor.close()
connection.close()

file = open("out.txt", "a")
d = time.strftime("%a, %d %b %Y %H:%M:%S", time.gmtime(time.time()))
file.write("I finished at " + d)
file.close()
