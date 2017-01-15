$(document).ready(function(){
    //标签切换
    // $(".bottom-fxied a").eq(0).addClass("curr");//默认给第一个li添加class为"curr"
    $(".bottom-fxied a").click(function(){
        $(".bottom-fxied a").removeClass("curr"); //移除class为"curr"
        $(this).addClass("curr"); //给添加选中的tab加一个class为"curr"
    });
 
    //看电视右侧附导航类
    $(".nav-channel").click(function(event){  
        //取消事件冒泡  
        event.stopPropagation();  
        //设置弹出层的位置  
        var offset = $(event.target).offset();  
        // $(".panel-channel").css({top:offset.top + $(event.target).height() + "px",left:offset.left});  
        //按钮的toggle,如果div是可见的,点击按钮切换为隐藏的;如果是隐藏的,切换为可见的。  
        $(".panel-channel").toggle("slow");  
    });  
    //点击空白处或者自身隐藏弹出层，下面分别为滑动和淡出效果。  
    $(document).click(function(event){$(".panel-channel").slideUp("slow")});  
    $(".panel-channel").click(function(event){$(this).fadeOut(1000)});

    //签到
    $(".user div:first-child").click(function(){
        $(this).addClass("unreport-btn"); //给添加一个class为"unreport-btn"
    });

    //领取奖品
    $(".high-3d p.tr span:nth-child(2)").click(function(){
        $(this).addClass("undraw-btn"); //给添加一个class为"unreport-btn"
    });

    //我的计算页面高度
    var boxH = $(window).height()-94;
    $(".userbox").css({"min-height":boxH + "px"});

    //产品列表高度
    var listH = $(window).height()-50;
    $(".list-view-pro").css({"min-height":listH + "px"});

    //抽奖页高度
    // var scrollH = $(window).height();
    // $(".sweep").css({"min-height":scrollH + "px"});

});

//返回前一页
function backGo(){
    history.back();
}

//头条单行滚动效果一
// function autoScroll(obj,ul_bz){
// 	$(obj).find(ul_bz).animate({
// 	    marginTop : "-25px"
// 	},500,function(){
// 	    $(this).css({marginTop:"0px"}).find("li:first").appendTo(this);
// 	});
// }
// setInterval('autoScroll("#oDiv", "#oUl")',3000)

//头条单行滚动效果二
// function autoScroll(obj){  
// 	$(obj).find("ul").animate({  
// 		marginTop:"-22px"  
// 	},500,function(){  
// 		$(this).css({marginTop:"0px"}).find("li:first").appendTo(this);  
// 	})  
// }  
// $(function(){  
// 	// setInterval('autoScroll(".maquee")',3000);
// 	setInterval('autoScroll(".lead-view")',3000);  
// })


