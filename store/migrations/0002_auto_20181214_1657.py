# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-12-14 08:57
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='store',
            old_name='users',
            new_name='user',
        ),
    ]
