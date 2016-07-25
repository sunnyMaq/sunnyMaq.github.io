/**
 * Created by lianx on 2016/6/19.
 */
window.onload=function(){
    var oContent=document.getElementById('content');
    var aLi=oContent.getElementsByTagName('li');
    var aP=oContent.getElementsByTagName('p');
    var oTop=document.getElementById('top');
    var oIconBox=document.getElementById('icon-box');

    for(var i = 0;i<aLi.length;i++){
        aLi[i].index=i;
        aLi[i].onmouseover=function(){
            for(var j = 0;j<aLi.length;j++){
                aP[j].style.display='none';
                move(aP[j],{bottom:-77},{time:100})
            }
            aP[this.index].style.display='block';
            move(aP[this.index],{bottom:0},{time:100})
        }
    }
//返回顶部
    window.onscroll=function(){
        var oScrollTop=document.body.scrollTop || document.documentElement.scrollTop;

        if(oScrollTop>=100){
            oIconBox.style.display='block';
        }else {
            oIconBox.style.display='none';
        }
        oTop.onclick=function(){
            document.body.scrollTop=document.documentElement.scrollTop=0;
        }
        //}
    }
}