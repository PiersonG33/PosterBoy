# Generated by Django 4.2.2 on 2023-08-04 14:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_userstatus_options'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='userstatus',
            options={'managed': False},
        ),
    ]