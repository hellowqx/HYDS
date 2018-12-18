from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^index/$', views.index,name='index'),
    url(r'^register/$', views.register,name='register'),
    url(r'^logins/$', views.logins,name='logins'),
    url(r'^logouts/$', views.logouts,name='logouts'),
    url(r'^reg_email/$', views.reg_email,name='reg_email'),
    url(r'^get_code/$', views.get_code,name='get_code'),
    url(r'^checkname/$', views.checkname,name='checkname'),
    url(r'^checkemail/$', views.checkemail,name='checkemail'),
    url(r'^userinfo/$', views.userinfo,name='userinfo'),
    url(r'^changeinfo/$', views.changeinfo,name='changeinfo'),
    url(r'^changeavatar/$', views.changeavatar,name='changeavatar'),
    url(r'^changepwd/$', views.changepwd,name='changepwd'),
    url(r'^$',views.index,name='index'),

]
