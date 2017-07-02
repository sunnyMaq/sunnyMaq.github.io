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

    //展开菜单
    $(".btn-menu").click(function(){

       if($("#close").is(":visible")){
           $("#close").hide();
           $("#open").show();
           $(".menu").show();
       }else {
           $("#open").hide();
           $("#close").show();
           $(".menu").hide();
       }
    })

});

