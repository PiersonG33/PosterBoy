# Generated by Django 4.2.2 on 2023-07-28 17:51

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AuthUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128)),
                ('last_login', models.DateTimeField(blank=True, null=True)),
                ('is_superuser', models.BooleanField()),
                ('username', models.CharField(max_length=150, unique=True)),
                ('first_name', models.CharField(max_length=150)),
                ('last_name', models.CharField(max_length=150)),
                ('email', models.CharField(max_length=254)),
                ('is_staff', models.BooleanField()),
                ('is_active', models.BooleanField()),
                ('date_joined', models.DateTimeField()),
            ],
            options={
                'db_table': 'auth_user',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Boards',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('topic_name', models.CharField(blank=True, max_length=50, null=True)),
                ('actions', models.IntegerField(blank=True, null=True)),
                ('reset', models.DurationField(blank=True, null=True)),
            ],
            options={
                'db_table': 'boards',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='PostArchive',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('userid', models.IntegerField(blank=True, null=True)),
                ('boardid', models.IntegerField(blank=True, null=True)),
                ('message', models.CharField(blank=True, max_length=200, null=True)),
                ('message_type', models.IntegerField(blank=True, null=True)),
                ('date', models.DateTimeField(blank=True, null=True)),
                ('color', models.IntegerField(blank=True, null=True)),
                ('x', models.IntegerField(blank=True, null=True)),
                ('y', models.IntegerField(blank=True, null=True)),
            ],
            options={
                'db_table': 'postarchive',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Posts',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('date', models.DateTimeField(blank=True, default=django.utils.timezone.now, null=True)),
                ('message', models.CharField(blank=True, max_length=200, null=True)),
                ('message_type', models.IntegerField(blank=True, null=True)),
                ('color', models.IntegerField(blank=True, null=True)),
                ('score', models.IntegerField(blank=True, default=1, null=True)),
                ('x', models.IntegerField(blank=True, null=True)),
                ('y', models.IntegerField(blank=True, null=True)),
            ],
            options={
                'db_table': 'posts',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='UserActions',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('action', models.CharField(blank=True, max_length=10, null=True)),
                ('date', models.DateTimeField(blank=True, default=django.utils.timezone.now, null=True)),
            ],
            options={
                'db_table': 'useractions',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='UserStatus',
            fields=[
                ('userid', models.OneToOneField(db_column='userid', on_delete=django.db.models.deletion.DO_NOTHING, primary_key=True, serialize=False, to='api.authuser')),
                ('role', models.CharField(blank=True, max_length=10, null=True)),
            ],
            options={
                'db_table': 'userstatus',
                'managed': False,
            },
        ),
    ]
