To get the database working:
Install postgresql and launch the psql shell.
Run the dump file 'pbdb.sql' using:
\i <Filepath/PosterBoy/PosterBoyDjango/Database/pbdb.sql>, using forward slashes in the path
That's it!

To configure Django: copy the config file found in PosterBoyDjango/config.py into
PosterBoyDjango/Database/config.py. This file will be ignored by git, so type in your database
credentials here. 'NAME' is the name of the database (posterboytesting by default), 'USER' is the
postgres user Django will log in with, 'PASSWORD' is that user's password, 'HOST' is the psql server
host (localhost if on the same PC), and 'PORT' is the port the server is on (5432 by default).

Once Django is configured, you can fill the database with testing data by running PosterBoyDjango/fill.py in python