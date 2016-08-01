window.onload=function(){
    //JS-拉钩滑动效果
    function getPos(obj){
        var l=0;
        var t=0;
        while(obj){
            l+=obj.offsetLeft;
            t+=obj.offsetTop;
            obj=obj.offsetParent;
        } return {left:l,top:t}
    }
    function hoverDir(obj, ev){
        var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
        var x=getPos(obj).left+obj.offsetWidth/2-ev.clientX;
        var y=getPos(obj).top%oSlide.offsetHeight+obj.offsetHeight/2-ev.clientY-scrollTop;

        return Math.round((Math.atan2(y, x)*180/Math.PI+180)/90)%4;
    }
    var ojs_block=document.getElementById('js_block');
    var aJs_block_li=ojs_block.children;
    var oSlide=document.getElementsByTagName('article')[0];

    for(var i=0; i<aJs_block_li.length; i++){
        aJs_block_li[i].onmouseenter=function(ev){
            var oEvent=ev || event;
            var n=hoverDir(this, oEvent);
            console.log(n);
            var oSpan=this.children[0];
            switch(n){
                case 0:
                    oSpan.style.left='200px';
                    oSpan.style.top=0;
                    break;
                case 1:
                    oSpan.style.left=0;
                    oSpan.style.top='200px';
                    break;
                case 2:
                    oSpan.style.left='-200px';
                    oSpan.style.top=0;
                    break;
                case 3:
                    oSpan.style.left=0;
                    oSpan.style.top='-200px';
                    break;
            }
            move(oSpan, {left: 0, top: 0});
        };
        aJs_block_li[i].onmouseleave=function(ev){
            var oEvent=ev || event;
            var n=hoverDir(this, oEvent);

            var oSpan=this.children[0];
            switch(n){
                case 0:
                    move(oSpan, {left: 200, top: 0});
                    break;
                case 1:
                    move(oSpan, {left: 0, top: 200});
                    break;
                case 2:
                    move(oSpan, {left: -200, top: 0});
                    break;
                case 3:
                    move(oSpan, {left: 0, top: -200});
                    break;
            }
        };
    }
    //JS-拉钩滑动效果
};
