
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