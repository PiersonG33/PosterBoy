**PosterBoy Unix Server Setup**

To setup PosterBoy on your Unix system, you'll need the following:

**Node and NPM**

Download NodeJS and NPM to your machine.
https://nodejs.org/en/download

In your terminal, run this to check and update your installation:
```
npm -g install npm
```

To run the website from the command line, go to the directory 'posterboy' and run:
```
npm start
```

**PostgreSQL and the Database**
In the terminal, type:
```
sudo apt install postgresql
sudo service postgresql start
sudo -u postgres psql
```

In the PSQL shell, type:
```
\i PATH_TO_FILE/PosterBoyDjango/Database/pbdb.sql
\l
```
You should see that the database was created. Note that PSQL requires forward slashes for file pathing. Use the '\q' command to leave the PSQL shell.

**Python and Necessary Packages**
In the terminal, type:
```
sudo apt update
sudo apt install python3
sudo apt install python3-pip
pip install django-rest-framework
python -m pip install django-cors-headers
pip install pyscopg2
```

**Cron**
In the terminal, type:
```
service --status-all
```
You should see a '+' next to the service named 'cron.' 

If cron is NOT active (no '+'), type the following into the terminal:
```
sudo service cron start
```

To add a new crontab task, type the following into the terminal:
```
crontab -e
```

This will open a Vim window, insert the following line at the end of the file.
```
0 * * * * ABS_PATH/python3 ABS_PATH/PosterBoy/PosterBoyDjango/resetActions.py

```
Note, there MUST be an empty line at the end of the file. Additionally, both the Python3 call and the resetActions.py call must be absolutely pathed.

To find out where your Python3 installation is, type this into the terminal: `which python3`