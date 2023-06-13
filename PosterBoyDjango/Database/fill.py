import psycopg2
import random
from django.contrib.auth.models import User

def generateWord(maxLen):
    len = random.randint(6, maxLen)
    out = ""
    for i in range(len):
        char = str(random.randint(32, 126))
        out += char
    return out

connection = psycopg2.connect(user="postgres",
                                  password="MyFirstgrade071",      
                                  host="localhost",
                                  port="5432",
                                  database="posterboytesting")

cursor = connection.cursor()
# cursor.execute("SELECT * FROM auth_user;")
# record = cursor.fetchall()
# print(record)

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
for i in range(3):
    topic = generateWord(49)
    actions = random.randint(2, 4)
    intervalNum = random.randint(1, 10)
    

# POST - 5 on each

# Status - 10

cursor.close()
connection.close()