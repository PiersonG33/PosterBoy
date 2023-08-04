**Migration Fix (On Local Machine)**

Run the following:
```
python manage.py showmigrations
```

Delete all files that are listed EXCEPT FOR API/migrations/*

Run:
```
python manage.py makemigrations
```

Run:
```
python manage.py migrate
```


