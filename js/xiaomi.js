/**
 * Created by Administrator on 2017/8/29.
 */

//头部购物车下拉动画
$(function () {
    $("#head>p>a:eq(0)").on("mouseover",function () {
        $("#gw").slideDown(800)
    }).on("mouseout",function () {
        $("#gw").slideUp(800)
    })
});


//导航栏的下拉动画
$(function () {
    //给指定的a标签移过时加展开动画
    $("nav .in").on("mouseenter",function (e) {
        var event =e.target;                        //拿到数据对象
        $("#dh").slideDown(800);
        $("#dh").empty();                       //清空原有的数据
        $.getJSON("../js/shuju.json",function (result) {
            for(var x in result){              //遍历属性
                if(event.innerHTML == x){
                    for(var s of result[x]){    //遍历属性值
                        var $imgSrc =$("<img src=''>");
                        $imgSrc.attr("src",s.img)
                        var $name = $("<p></p>");
                        $name.html(s.name);
                        var $money = $("<p></p>");
                        $money.html(s.money);
                        $("<div id='box'></div>").append($imgSrc).
                        append($name).append($money).appendTo($("#dh"))
                    }
                }
            }
        })
    });

    //移走a时给父元素div加收起动画
    $("nav #qq").on("mouseleave",function () {
        $("#dh").slideUp(400)
    })
});

//最后两个a标签加收起动画
$(function () {
    $("nav .yc").on("mouseenter",function () {
        $("#dh").slideUp()
    })
});


//导航栏的搜索框
$(function () {
    $("nav input").focus(function () {
        $("#search").show();
        $("nav input").css({"borderColor": "orange", "outline": "none"});
        $(".bg").css("borderColor", "orange");
        $("#search").empty();
        $.getJSON("../js/input.json", function (result) {
            for (var s of result.defaultWords) {
                var $key = $("<span class='a1'></span>");
                $key.html(s.Key);
                var $rst = $("<span class='a2'></span>");
                $rst.html("约有" + s.Rst + "件");
                $("<a href='#'></a>").append($key).append($rst).appendTo($("#search"))
            }
        })
    }).blur(function () {
        $("#search").hide();
        $("nav input").css({"borderColor": "#ccc"});
        $(".bg").css("borderColor", "#ccc")
    });
});

// 广告条导航的隐藏菜单
$(function () {
    $("#banner .xl").on("mouseenter",function (e) {
        var event =e.target;        //获取事件对象
        $("#ban1").show();          //展示div
        $("#ban1").empty();         //删除#ban1里的元素
        $.getJSON("../js/banner_menu.json",function(result){
            for(var x in result){                   //遍历属性名
                if(event.innerText == x + ">"){         //所有的文本内容都要一致
                    for(var s of result[x]){        //遍历属性值
                        // console.log(s);             //使用打印的方法判断函数是否执行，纠错
                        var $imgSrc = $("<img src=''>");
                        $imgSrc.attr("src",s.picSrc);
                        var $name =$("<span></span>");
                        $name.html(s.proName);
                        var $span =$("<span></span>");
                        $span.html(s.title);
                        //判断title的值是否为空，
                        if(s.title !=""){
                            $span.css({border:"1px solid orangered",
                                width:"40px",height:"30px"});
                        }
                        $("<a href='#' id='box1'></a>").attr("href",s.proSrc).append($imgSrc)
                            .append($name).append($span).appendTo("#ban1");
                    }
                }
            }
        })
    });

    $("#banner ul").on("mouseleave",function () {
        $("#ban1").hide()
    })
});


//轮播图
$(function () {


var n=0;
    var arr =["../images/1.jpg",
        "../images/2.jpg",
        "../images/3.jpg",
        "../images/4.jpg",
        "../images/5.jpg",
        "../images/6.jpg"];
function changeImage() {

    $("#banner>a img").attr("src",arr[n+1]);
    //动态添加小圆点的背景色
    $("#sp").find("span").eq(n+1).addClass("s").siblings().removeClass("s");
    n++;
    if(n==6){
        n=-1
    }
}
var time =setInterval(changeImage,2000);

//点击小圆点显示对应图片
    $("#sp").find("span").click(function () {
        console.log($(this).index());
        //获取span的对应下标并赋值给图片下标
        var q =$(this).index();
        $("#banner a img").attr("src",arr[q]);
        $("#sp").find("span").eq(q).addClass("s").siblings().removeClass("s");
        //把q的值重新赋给n
        n = q-1;
    });

//鼠标划过停止轮播
console.log($("#banner"))
$("#banner").hover(function () {
    clearInterval(time)
},function () {
    time = setInterval(changeImage,2000)    //必须要给time变量，否则第二次放上去会加快
});

    console.log($("#bt span:eq(1)"));
    //点击向左按钮显示对应图片
    $("#bt span:eq(1)").click(function () {
        //判断最左一张的下标
        if(n==0){
            n=5;
        }else{
           n--;
        }
        $("#banner>a img").attr("src",arr[n]);
        $("#sp").find("span").eq(n).addClass("s").siblings().removeClass("s");
    });
    console.log($("#bt span:eq(0)"));
    //点击向右按钮显示对应图片
    $("#bt span:eq(0)").click(function () {
        //判断最后一张的下标
        if(n==5){
            n=0;
        }else{
            n++;
        }
        $("#banner>a img").attr("src",arr[n]);
        $("#sp").find("span").eq(n).addClass("s").siblings().removeClass("s")
    })
});


//广告条下部分的点击轮播图
$(function () {
    $("#btn").click(function () {
        $("#main_top ul").animate({
            left: 0
        },400)
    })
    $("#btn1").click(function () {
        $("#main_top ul").animate({
            left: "-1227px"
        },400)
    })
})


//主体中部划过li的阴影效果,改变bottom值实现动画
$(function () {
    $("#main_center li").hover(function () {
        $(this).find(".cs").animate({
            bottom: 0
        },200)
    },function () {
        $(this).find(".cs").animate({
            bottom: -85
        },200)
    })
});


$(function () {
    $(".ww .ch").on("mouseenter",function (e) {
        var event =e.target;

        $(".ww").empty();
        $.getJSON("../js/match.json",function (result) {
            for(var x in result){
                // console.log(x);
                if(event.innerHTML ==x){
                    for(var s of result[x]){
                        $(".cr").attr("src",s.picSrc);
                        // $p.html(s.productName);

                        // $("<a href='#' id='a'></a>").append($img).append($p).appendTo(".lis")
                    }
                }
            }
        })
    })
});
