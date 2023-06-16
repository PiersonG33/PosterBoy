import psycopg2
from psycopg2.extensions import adapt, register_adapter, AsIs
import random
from django.contrib.auth.models import User
from datetime import datetime, timezone

def generateWord(maxLen):
    len = random.randint(6, maxLen)
    out = ""
    for i in range(len):
        char = str(random.randint(32, 126))
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
    cursor.execute("INSERT INTO boards VALUES(" + topic + ", " + actions + ", " + intervalNum + " " + intervalUnits[i] + ");")

# POST - 10 on each
userList = list(userDict.keys())

#start here
for b in range(3):
    for i in range(10):
        cursor.execute("SELECT id FROM auth_user WHERE email = \'" + userDict[userList[i]] + "\';")
        user_id = cursor.fetchall()
        cursor.execute("SELECT id FROM auth_user WHERE topic_name = \'" + topics[b] + "\';")
        board_id = cursor.fetchall()
        dt = datetime.now(timezone.utc)
        point = Point(random.randint(-300, 300), random.randint(-300, 300))
        cursor.execute("INSERT INTO posts VALUES(" + user_id + ", " + board_id + ", " + generateWord(200) + " " + 0 + ", " + dt + ", " + 0 + ", " + point + ", " + random.randint(0, 10) + ");")
        
        
# Status - 10
for i in range(10):
    cursor.execute("SELECT id FROM auth_user WHERE email = \'" + userDict[userList[i]] + "\';")
    user_id = cursor.fetchall()
    for b in range(3):
        cursor.execute("SELECT id FROM auth_user WHERE topic_name = \'" + topics[b] + "\';")
        board_id = cursor.fetchall()
        cursor.execute("INSERT INTO userstatus VALUES(" + user_id + ", " + board_id + ", " + random.randint(1, 10) + ");")




cursor.close()
connection.close()