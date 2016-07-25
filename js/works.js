/**
 * Created by lianx on 2016/6/19.
 */
window.onload=function(){
    var oBox=document.getElementById('box');
    var oUl=document.getElementById('oul');
    var aLi=oUl.children;
    var aImg=oUl.getElementsByTagName('img');
    var disC=oBox.offsetWidth/2;
    //alert(disC)

    for(var i = 0;i<aLi.length;i++){
        var oSpan=document.createElement('span');
        aLi[i].appendChild(oSpan)
    }
//            //var aSpan=document.getElementsByTagName('span');
    oUl.style.left=disC-(1+0.5)*aLi[0].offsetWidth+'px';
    oUl.onmousedown=function(ev){
        var oEvent=ev || event;
        var disX=oEvent.clientX-oUl.offsetLeft;
        document.onmousemove=function(ev){
            var oEvent=ev || event;
            var l=oEvent.clientX-disX;
            if(l>disC-(0+0.5)*aLi[0].offsetWidth)l=disC-(0+0.5)*aLi[0].offsetWidth;
            //alert(aLi[0].offsetWidth)
            if(l<disC-(aLi.length-1+0.5)*aLi[0].offsetWidth)l=l<disC-(aLi.length-1+0.5)*aLi[0].offsetWidth;
            setSize();
            oUl.style.left=l+'px';
        }
        document.onmouseup=function(){
            document.onmousemove=null;
            document.onmouseup=null;
        }
        return false;
    }
    function setSize(){
        for(var i = 0;i<aLi.length;i++){
            var a=Math.abs(disC-(aLi[i].offsetLeft+aLi[i].offsetWidth/2+oUl.offsetLeft));
            var sl=1-a/500;
            var c=sl.toFixed(2);
            (sl<0.5 )&& (sl=0.5);
            aImg[i].style.width=520*sl+'px';
            aImg[i].style.height=358*sl+'px';
            aImg[i].style.marginLeft=-(aImg[i].offsetWidth-260)/2+'px';
            aImg[i].style.marginTop=-(aImg[i].offsetHeight-179)/2+'px';
            aLi[i].style.zIndex=sl*100000;
        }
    }
    setSize();

}