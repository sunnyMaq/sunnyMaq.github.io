
//设置1rem
function change(){

    var clientW = document.documentElement.clientWidth;
    if (clientW > 750) clientW = 750;
    var font=clientW/(375/25);
    document.documentElement.style.fontSize=font+'px';
    return font;
}
(function(){
    window.addEventListener('resize',change,false);
    change();
})();
$(function(){
    $(".btn-more-chance").eq(2).click(function(){
        $(".invite").show();
    })
    $(".invite").click(function(){
        $(this).hide();
    })

//    中奖信息
    $(".draw-notice-list").animate({top:"-.6rem"},500)
})