# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-12-19 09:55
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('goods', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='goods',
            name='count',
            field=models.IntegerField(default=0, verbose_name='商品销量'),
        ),
        migrations.AlterField(
            model_name='goods',
            name='status',
            field=models.IntegerField(default=1, verbose_name='商品状态'),
        ),
    ]
