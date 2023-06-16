import psycopg2
import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'PosterBoyDjango.settings')
import django
from psycopg2.extensions import adapt, register_adapter, AsIs
import random
django.setup()
from django.contrib.auth.models import User
from datetime import datetime, timezone

def generateWord(maxLen):
    len = random.randint(6, maxLen)
    out = ""
    for i in range(len):
        char = chr(random.randint(32, 126))
        if(char.isalnum()):
            out += char
    return out

class Point(object):
    def __init__(self, x, y):
        self.x = x
        self.y = y

def adapt_point(point):
    x = adapt(point.x).getquoted()
    y = adapt(point.y).getquoted()
    return AsIs("'(%s, %s)'" % (x, y))


connection = psycopg2.connect(user="postgres",
                                  password="MyFirstgrade071",      
                                  host="localhost",
                                  port="5432",
                                  database="posterboytesting")

cursor = connection.cursor()
# cursor.execute("SELECT * FROM auth_user;")
# record = cursor.fetchall()
# print(record)
register_adapter(Point, adapt_point)
userDict = dict()

# USER - 10
for i in range(10):
    username = generateWord(30)
    email=generateWord(20)+'@'+generateWord(10)+".com"
    password=generateWord(55)
    
    user = User.objects.create_user(username,email,password)
    
    userDict[username] = email

# BOARD - 3
intervalUnits = ["minute", "hour", "day"]
topics = ["One", "Two", "Three"]
for i in range(3):
    topic = topics[i]
    actions = random.randint(2, 4)
    intervalNum = random.randint(1, 10)
    cursor.execute("INSERT INTO boards VALUES(" + str(i) + ", \'" + topic + "\', " + str(actions) + ", \'" + str(intervalNum) + " " + intervalUnits[i] + "\');")
connection.commit()

# POST - 10 on each
userList = list(userDict.keys())
#print(userList)

# #start here
for b in range(3):
    for i in range(10):
        cursor.execute("SELECT id FROM auth_user WHERE lower(email) = lower(\'" + userDict[userList[i]] + "\');")
        user_id = cursor.fetchone()
        cursor.execute("SELECT id FROM boards WHERE lower(topic_name) = lower(\'" + topics[b] + "\');")
        board_id = cursor.fetchone()
        dt = datetime.now(timezone.utc)
        point = Point(random.randint(0, 2300), random.randint(0, 1800))
        cursor.execute("INSERT INTO posts VALUES(" + str(i + 10*b) + ", " + str(user_id[0]) + ", " + str(board_id[0]) + ", \'" + generateWord(200) + "\', " + str(0) + ", \'" + str(dt) + "\', " + str(0) + ", \'(" + str(point.x) + ", " + str(point.y) + ")\', " + str(random.randint(0, 10)) + ");")
connection.commit()
        
# Status - 10
for i in range(10):
    cursor.execute("SELECT id FROM auth_user WHERE lower(email) = lower(\'" + userDict[userList[i]] + "\');")
    user_id = cursor.fetchone()
    for b in range(3):
        cursor.execute("SELECT id FROM boards WHERE lower(topic_name) = lower(\'" + topics[b] + "\');")
        board_id = cursor.fetchone()
        cursor.execute("INSERT INTO userstatus VALUES(" + str(user_id[0]) + ", " + str(board_id[0]) + ", " + str(random.randint(1, 10)) + ");")
connection.commit()

cursor.close()
connection.close()