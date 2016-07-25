/**
 * Created by lianx on 2016/6/10.
 */
window.onload=function(){
    var oNav=document.getElementById('nav');
    var oNavBg=document.getElementById('nav-bg');
    var aLi=oNav.getElementsByTagName('li');
    var oHi=document.getElementById('hi');
    var oCon=document.getElementById('con');
    var oPro=document.getElementById('pro');
    var str='Welcome to sunny\' s website, I am 24 years old and currently in Beijing,and want to be a front-end engineer.';
    var timer='';
    var n=0;


    oNav.onmouseover=function(){
        oNav.className='ac';
        oNavBg.style.display='block';
        for(var i = 0;i<aLi.length;i++){
            aLi[i].onmouseover=function(){
                for(var j = 0;j<aLi.length;j++){
                    aLi[j].className='';
                }
                this.className='on';
            }
            aLi[i].onmouseout=function(){
                this.className='';
            }
        }

    };

    oNav.onmouseout=function(){
        oNav.className='';
        oNavBg.style.display='none';
    };
    for(var i = 0;i<str.length;i++){
        var oSpan=document.createElement('span');
        oSpan.innerHTML=str.charAt(i);
        oCon.appendChild(oSpan);
    }
    var aSpan=oCon.children;
    move(oHi,{opacity:1},{time:800,end:function(){
        timer=setInterval(function(){
            move(aSpan[n],{opacity:1,time:0.001});
            n++;
            if(n==aSpan.length){
                clearInterval(timer);
                move(oPro,{opacity:1},{time:800})
            };
        },80)
    }})
}