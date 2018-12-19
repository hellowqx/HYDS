from django.shortcuts import render,HttpResponse,redirect
from django.views.decorators.http import require_GET,require_POST
from goods.models import Goods
from . import models
from django.contrib.auth.models import User



def add_shopcart(request,g_id,num):
    _goods=Goods.objects.get(pk=g_id)
    #查询购物车是否有商品
    try:
        shopcart=models.ShopCart.objects.get(user=request.user,goods=_goods)
        shopcart.num += int(num)
        subtotal = _goods.price * shopcart.num
        print(subtotal,11111111111)
        shopcart.subtotal =subtotal
        shopcart.save()
    except:
        subtotal=_goods.price*int(num)
        print(subtotal,222222222222222)
        shopcart=models.ShopCart(user=request.user,goods=_goods,num=num,subtotal=subtotal)
        shopcart.save()
    return HttpResponse('添加成功')



def shopcart_info(request):
    shoplist = models.ShopCart.objects.filter(user=request.user).order_by('-time')
    return render(request, 'shopcart/shopcart_info.html', {'shoplist': shoplist})


def del_shopcart(requesrt,p_id):
    shopcart=models.ShopCart.objects.get(pk=p_id)
    shopcart.delete()
    return redirect('shopcart:shopcart_info')