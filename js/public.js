/**
 * Created by lianx on 2016/6/10.
 */
window.onload=function(){
    var oNav=document.getElementById('nav');
    var oNavBg=document.getElementById('nav-bg');
    var aLi=oNav.getElementsByTagName('li');


    oNav.onmouseover=function(){
        oNav.className='ac';
        oNavBg.style.display='block';
        for(var i = 0;i<aLi.length;i++){
            //aLi[i].className='ac'
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
};