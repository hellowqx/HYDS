from django.conf.urls import url
from . import views



urlpatterns=[
    url(r'^add_type/$',views.add_type,name='add_type'),
    url(r'^(?P<s_id>\d+)/add_goods/$',views.add_goods,name='add_goods'),
    url(r'^select2/$',views.select2,name='select2'),
    # url(r'^add_goods/$',views.add_goods,name='add_goods'),
    # url(r'^add_goods/$',views.add_goods,name='add_goods'),

]