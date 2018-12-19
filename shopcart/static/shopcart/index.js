$(function(){

    /*
       头部鼠标划过事件
    */
   $(".tz").mouseenter(
       function(){
          $(".tz1").css({"display":"block"})
   });
   $(".tz1").mouseleave(
       function () {
          $(".tz1").css({"display":"none"})
   });
   $(".gy").mouseenter(
       function(){
          $(".list-sj").css({"display":"block"})
       });
   $(".list-sj").mouseleave(
       function () {
          $(".list-sj").css({"display":"none"})
       });
/*
* banner轮播
* */
    //计时器开始轮播
    var i=0;
   time=setInterval(function () {
      i++;

      if(i>=8){
         i=0;
      }
      $(".banner-yd").stop(true,true).animate({"left":-1423*i},500);
      $(".banner-y li").removeClass();
      //console.log($(".banner-y li"))
      $(".banner-y li").eq(i).addClass("active");
   },5000);
//按钮点击
   $(".banner-y li").click(function () {
      i=$(this).index();
      $(".banner-yd").stop(true,true).animate({"left":-1423*i},500);
      $(".banner-y li").removeClass();
      $(".banner-y li").eq(i).addClass("active");
   });
   //鼠标移入移出
   $("#banner").hover(
       function () {
          clearInterval(time)
       },
       function(){

          time=setInterval(function () {
             i++;
             if(i>=8){
                i=0;
             }
             $(".banner-yd").stop(true,true).animate({"left":-1423*i},500);
             $(".banner-y li").removeClass();
             //console.log($(".banner-y li"))
             $(".banner-y li").eq(i).addClass("active");
          },5000);
       }
   );

     /*
     * 头部树状菜单
     * */
	 $(".dj li:has(ul)").children().children().css("display","none")
   $(".dj li:has(ul)").click(function(){
         if (this) {//判断点击当前li是否触发的目标对象
            if($(this).children().children().is(":hidden")){
               //$(this).css("background", "red");
               //console.log(123)
            } else {
               //$(this).css("background", "green")
            }
            //$(this).children().children().toggle("slow");

         }

      $(this).children().children().toggle(0);
      //$(this).children("span").css("display","block")

   });

   $("#top-left-dizhi").hover(
       function () {
          $(".dz-d").css("display","block")
       },
       function () {
          $(".dz-d").css("display","none")
       }

   );

});



$(function () {
    /*
     * 内容页产品图片轮播
     * */
    var i=0;
    time=setInterval(function () {
        if(i>=4){
            i=0
        }
        $(".goods-left-img li").removeClass();
        $(".goods-left-img li").eq(i).addClass("goods-left-img-active");
        $(".goods-right-img li").css("display","none");
        $(".goods-right-img li").eq(i).css("display","block");
        i++;

    },5000);



    /*
     * 鼠标划过事件
     * */
    $(".goods-right-img").hover(
        function(){
            clearInterval(time)
        },function(){
            time=setInterval(function () {
                if(i>=4){
                    i=0
                }
                $(".goods-left-img li").removeClass();
                $(".goods-left-img li").eq(i).addClass("goods-left-img-active");
                $(".goods-right-img li").css("display","none");
                $(".goods-right-img li").eq(i).css("display","block");
                i++;

            },5000);
        }
    );
    $(".goods-left-img li").hover(
        function () {
            $(".goods-left-img li").removeClass();
            $(this).addClass("goods-left-img-active");
            $(".goods-right-img li").css("display","none");
            $(".goods-right-img li").eq($(this).index()).css("display","block")
            clearInterval(time)
        },
        function () {
            time=setInterval(function () {
                if(i>=4){
                    i=0
                }
                $(".goods-left-img li").removeClass();
                $(".goods-left-img li").eq(i).addClass("goods-left-img-active");
                $(".goods-right-img li").css("display","none");
                $(".goods-right-img li").eq(i).css("display","block");
                i++;

            },5000);
        }
    )
});
$(function () {
    $(".jiage-right").hover(
        function () {
            $(".jiage-right-img").css("display","block")
        },
        function () {
            $(".jiage-right-img").css("display","none")
        }
    )
});


$(function () {
    $(".zhuang span").click(function () {
        $(".zhuang span").removeClass();
        $(this).addClass("zhuang-active")
    })
});
/*$(function () {

    $(".nub-jian").click(function () {
        console.log(1234564564654);
        i=$("input").val();
        $(".goods-nub input").val((i++))
    });
    $(".nub-jia").click(function () {
        i=$("input").val();
        $(".goods-nub input").val(i++)
    })
});*/



$(function (){
    //加的效果
    $(".nub-jia").click(function(){
        var n=$(this).prev().val();
        var num=parseInt(n)+1;
        if(num==0){ return;}
        $(this).prev().val(num);
    });
    //减的效果
    $(".nub-jian").click(function(){
        var n=$(this).next().val();
        var num=parseInt(n)-1;
        if(num==0){ return}
        $(this).next().val(num);
    });
});




$(function () {
    $(".dz-bl").hover(
        function () {
            $(".sg-dz").css("display","block")
        },
        function () {
            setTimeout(
                function(){
                    $(".sg-dz").css("display","none")
                },1000)
        }
    );
    $(".sg-dz-x").click(
        function(){
            $(".sg-dz").css("display","none")
        }
    )
});




$(function () {
    var cg=$(".goods-bottom-left-top");
    $(window).scroll(function() {
        var navTop=$(window).height()+$(document).scrollTop();
        //console.log($(document).scrollTop())
        //console.log($(window).height())
        //console.log(navTop);
        //console.log(cg.offset().top);
        if(navTop>=1557){
            cg.css("position","fixed")
        }else if(navTop<1557){
            cg.css("position","relative")
        }
    });











    $(".span1").click(
        function(){
            $(".goods-bottom-xq").css("display","block");
            $(".goods-bottom-pl").css("display","none");
            $(".goods-bottom-left-top span").removeClass("goods-bottom-left-top-bl");
            $(this).addClass("goods-bottom-left-top-bl")
        }

    );
    $(".span2").click(
       function(){
           $(".goods-bottom-xq").css("display","none");
           $(".goods-bottom-pl").css("display","block");
           $(".goods-bottom-left-top span").removeClass("goods-bottom-left-top-bl");
           $(this).addClass("goods-bottom-left-top-bl")
       }
    );

    $(".tc-car").click(
        function(){
            $(".tc-car-chu").slideToggle(0)
        }

    )
});

$(function(){
    $(".sjh-txt input").focus(function () {
        $(this).css({"border":"1px solid #64a131","box-shadow":"0 0 2px"})
    });
    $(".sjh-txt input").blur(
        function(){
            $(this).css({"border":"1px solid  #ccc","box-shadow":"none"})

        }
    )
});
$(function () {
    $("#nub").blur(
        function () {
            if($("#nub").val().length==11&&$("#nub").val()!=""){
                $(this).css({"border":"1px solid #ccc"})
                $(this).siblings(".true").css("display","block");
                $(this).siblings(".first").css("display","none");
                //console.log($("#nub").val().length)
            }else if($("#nub").val()==""){
                //console.log(123)
                $(this).siblings(".true").css("display","none");
                $(this).siblings(".first").css("display","block")
                $(this).css("border","1px solid red")
            }else if($("#nub").val().length !=11){
                $(this).siblings(".true").css("display","none");
                $(this).siblings(".first").css("display","block");
                $(this).css("border","1px solid red")
                //console.log(123)
            }
        }
    );
    $("#pass").blur(
        function () {
            if($("#pass").val()!=""&&$("#pass").val().length>=6&&$("#pass").val().length<=20){
                //console.log($("#pass").val().length);
                $(this).siblings(".first").css("display","none");
                $(this).siblings(".true").css("display","block")
                $(this).css({"border":"1px solid #ccc"})
            }else if($("#pass").val()==""){
                $(this).siblings(".true").css("display","none");
                $(this).siblings(".first").css("display","block")
                    $(this).css("border","1px solid red")
            }else if($("#pass").val().length<=5||$("#pass").val().length>=21){
                $(this).siblings(".true").css("display","none");
                $(this).siblings(".first").css("display","block")
                $(this).css("border","1px solid red")
            }
        }
    );
    $("#pass2").blur(
        function () {
            if($("#pass2").val()==$("#pass").val()){
                //console.log($("#pass2").val().length);
                $(this).siblings(".first").css("display","none");
                $(this).siblings(".true").css("display","block")
                $(this).css({"border":"1px solid #ccc"})
            }else if($("#pass2").val()==""){
                //console.log(123)
                $(this).siblings(".true").css("display","none");
                $(this).siblings(".first").css("display","block")
                $(this).css("border","1px solid red")
            }
            else if($("#pass2").val()!=$("#pass").val()){
                $(this).siblings(".true").css("display","none");
                $(this).siblings(".first").css("display","block")
                $(this).css("border","1px solid red")
            }
        }
    );
    $("#yan").blur(
        function () {
            if($("#yan").val()==""){
                $(this).siblings(".first").css("display","block");
                $(this).siblings(".true").css("display","none")
                $(this).css("border","1px solid red")
                //console.log(123)
            }else if($("#yan").val()=="ejis"){
                $(this).siblings(".true").css("display","block");
                $(this).siblings(".first").css("display","none")
                $(this).css({"border":"1px solid #ccc"})
            }else if($("#yan").val()!="ejis"){
                $(this).siblings(".true").css("display","none");
                $(this).siblings(".first").css("display","block")
                $(this).css({"border":"1px solid #ccc"})
            }
        }
    )
    $("#yan2").blur(
        function () {
            if($("#yan2").val()==""){
                $(this).siblings(".first").css("display","block");
                $(this).siblings(".true").css("display","none")
                $(this).css("border","1px solid red")
                //console.log(123)
            }else if($("#yan2").val()=="123456"){
                $(this).siblings(".true").css("display","block");
                $(this).siblings(".first").css("display","none")
                $(this).css({"border":"1px solid #ccc"})
            }else if($("#yan2").val()!="123456"){
                $(this).siblings(".true").css("display","none");
                $(this).siblings(".first").css("display","block")
                $(this).css({"border":"1px solid #ccc"})
            }
        }
    )
});
$(function () {
    $("#btn-zc").on("click",function () {
        if($("#pass").val()!=$("#pass2").val()){
            $("#alt").css("display","block");
           // console.log(1)
        } else if($("#pass").val()==""){
            $("#alt").css("display","block");
            //console.log(1111)
        }else if($("#pass").val().length<=5||$("#pass").val().length>=20){
            $("#alt2").css("display","block");
            //console.log(111111111111)
        }
    });
    $(".alt-x").on("click",function () {
        $("#alt").css("display","none");
        $("#alt2").css("display","none");
        $("#alt-login-zm").css("display","none");
        $("#alt-login-zm1").css("display","none")
        $("#alt-login-zm2").css("display","none")
    })
});
$(function () {
    $(".btn-left").on("click",function () {
        if($("#nub-txt").val()!="123456"){
            $("#alt-login-zm").css("display","block");
            console.log(123456)
        }else if($("#pass-txt").val()!="123456"){
            $("#alt-login-zm").css("display","block")
            console.log(12345611)
        }else if($("#yan-te").val()!="ejis"){
            $("#alt-login-zm1").css("display","block")
            console.log(12345611123123)
        }else{
            $("#alt-login-zm2").css("display","block")
        }
    })
})

$(function () {
    $(".mai-1").on("click",function () {
        $(".main-d").css("display","none")
        $("#shop-car").css("display","none")
    });
    $(".cha").on("click",function () {
        $(".main-d").css("display","none");
        $("#shop-car").css("display","none")
    })
});
$(function () {
    $(".list-cat").on("click",function () {
        $(".main-d").css("display","block")
        $("#shop-car").css("display","block")
    })
});
$(function () {
    $(".buy-2").on("click",function () {
        $(".main-d").css("display","block")
        $("#shop-car").css("display","block")
    })
});
$(function () {
    $(".anniu").on("click",function () {
        $(".main-d").css("display","block");
        $("#shop-car").css("display","block")
    })
});$(function () {
    $(".wrap-bottom-car").on("click",function () {
        $(".main-d").css("display","block");
        $("#shop-car").css("display","block")
    })
});









$(function () {
    $(".dlt").on("click",function () {
        $("#list-main-rem").css("display","block")
        $(this).parent().parent().remove()

    })

})
$(function () {
    $(".alt-btn-x").on("click",function () {
        $("#list-main-rem").css("display","none")
    })
    $(".alt-x").on("click",function () {
        $("#list-main-rem").css("display","none")
    })
})
$(function () {
    console.log($(".play-d").attr("date-m"))

   $(".nub-jia").on("click",function () {
       var i=$(this).prev().val();
       i++;
       $(this).parent().siblings(".shop-sum").children().html("￥"+i*$(".play-d").attr("date-m"));
       $(".sum").html("￥"+i*$(".play-d").attr("date-m"));
       //console.log(i)
   })
    $(".nub-jian").on("click",function () {
        var i=$(this).next().val();
        i--;
        if(i<=1){
            i=1;
        }
        $(this).parent().siblings(".shop-sum").children().html("￥"+i*$(".play-d").attr("date-m"));
        $(".sum").html("￥"+i*$(".play-d").attr("date-m"));
        //console.log(i)
    })
})