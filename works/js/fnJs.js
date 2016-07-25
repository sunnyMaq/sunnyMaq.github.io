/**
 * Created by lianx on 2016/6/23.
 */
function getClass(obj,name){
    return (obj.currentStyle || getComputedStyle(obj,false))[name]
}
function getPos(obj){
    var l=0;
    var t=0;
    while (obj){
        l+=obj.offsetLeft;
        t=obj.offsetTop;
        obj=obj.offsetParent;
    }
    return {left:l,top:t}
}
function dis(ev,obj){
    var oEvent=ev || event;
    var a=getPos(obj).left+obj.offsetWidth/2-oEvent.clientX;
    var b=getPos(obj).top+obj.offsetHeight/2-oEvent.clientY;
    return Math.sqrt(a*a+b*b)
}
function jsonp(json){
    //路径，{wd:,cd:,},成功函数
    if(!json.url){
        return;
    }
    json.data=json.data || {};
    json.cnName=json.cnName || 'cb';

    var fnName='show'+Math.random();
    fnName=fnName.replace('.','');

    window[fnName]=function(json1){
        json.fnSucc && json.fnSucc(json1);
        oHaed.removeChild(oS);
    }
    json.data[json.cnName]=fnName;
    var arr=[];
    for(var name in json.data){
        arr.push(name+'='+json.data[name])
    }
    var oS=document.createElement('script');
    oS.src=json.url+'?'+arr.join('&');
    var oHaed=document.getElementsByTagName('head')[0];
    oHaed.appendChild(oS);

}
function move(obj,json,options){
    options=options ||{};
    options.time=options.time || 1000;
    options.type=options.type || 'linear';

    clearInterval(obj.timer);
    var n=0;
    var cs=parseInt(options.time/30);
    var start={};
    var dis={};
    for(var name in json){
        start[name]=parseFloat(getClass(obj,name));
        dis[name]=json[name]-start[name];
    }
    //console.log(json[name])

    obj.timer=setInterval(function(){
        n++;
        for(var name in json) {
            switch (options.type){
                case 'linear':
                    var a=n/cs;
                    var tmp=start[name]+ dis[name]*a ;
                    break;
                case 'ease-in':
                    var a=n/cs;
                    var tmp=start[name]+ dis[name]*a*a*a ;
                    break;
                case 'ease-out':
                    var a=1-n/cs;
                    var tmp=start[name]+ dis[name]*(1-a*a*a);
                    break;
            }

            if (name == 'opacity') {
                obj.style.opacity =tmp;
                obj.style.filter = 'alpha(opacity=' + tmp* 100 + ')';
            } else {
                obj.style[name] = tmp+ 'px';//name是变量，所以需要用中括号接收。
            }
        }
        if(n==cs){
            clearInterval(obj.timer);
            options.end && options.end();
        }
    },30);

}
