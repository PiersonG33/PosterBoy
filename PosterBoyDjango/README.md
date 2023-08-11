TO FIX DJANGO MIGRATIONS:

first, run `python manage.py showmigrations` to get a list of all migrations applicable to the project

Next, delete all migrations that are not in the api app. Core migrations will be in /core/migrations.
The others are stored in the python lib/site-packages, which has different locations per OS. Within Site-packages,
the admin, auth, and contenttypes apps are all in /django/contrib. Within each subfolder, delete the contents of the
'migrations' folder or delete the folder entirely. Running `showmigrations` again should show that the only existing
migrations are in the api app. After deleting all migrations, run `python manage.py makemigrations` to re-create necessary
migrations. Then, run `python manage.py migrate` to apply the migrations to the project, update the database from pbdb.sql,
and the full database should be functional.