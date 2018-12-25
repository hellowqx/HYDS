# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-12-20 12:50
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Address',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, verbose_name='dizhi_id')),
                ('recv', models.CharField(max_length=50)),
                ('phone', models.CharField(max_length=50, verbose_name='手机号')),
                ('diqu', models.CharField(max_length=50, verbose_name='diqu')),
                ('province', models.CharField(max_length=50, verbose_name='')),
                ('city', models.CharField(max_length=50, verbose_name='')),
                ('qu', models.CharField(max_length=50, verbose_name='')),
                ('intro', models.CharField(max_length=255, verbose_name='')),
                ('status', models.BooleanField(default=False, verbose_name='')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]