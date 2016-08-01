/**
 * Created by ijiajia on 2016/6/13.
 */
function getStyle(obj, name){
    return (obj.currentStyle || getComputedStyle(obj, false))[name];
}
function move(obj, json, options){
    var options=options || {};
    options.duration=options.duration || 800;
    options.easing=options.easing || 'ease-out';

    var start={};
    var dis={};
    for(var name in json){
        start[name]=parseFloat(getStyle(obj, name));
        dis[name]=json[name]-start[name];
    }
    var count=Math.floor(options.duration/30);
    var n=0;
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        n++;

        for(var name in json){
            switch(options.easing){
                case 'linear':
                    var a=n/count;
                    var cur=start[name]+dis[name]*a;
                    break;
                case 'ease-in':
                    var a=n/count;
                    var cur=start[name]+dis[name]*a*a*a;
                    break;
                case 'ease-out':
                    var a=1-n/count;
                    var cur=start[name]+dis[name]*(1-a*a*a);
                    break;
            }

            if(name=='opacity'){
                obj.style.opacity=cur;
                obj.style.filter='alpha(opacity='+cur*100+')';
            }else{
                obj.style[name]=cur+'px';
            }
        }

        if(n==count){
            clearInterval(obj.timer);
            options.complete && options.complete();
        }
    }, 30);
}
;(function(window){
    var left=0;
    var iSpeed=0;   // 速度
    var timer;
    window.elastic=function(obj, iTarget){
        clearInterval(timer);
        timer=setInterval(function(){
            iSpeed+=(iTarget-left)/5;
            iSpeed*=0.8;
            left+=iSpeed;

            obj.style.left=Math.round(left)+'px';
            // 关闭定时器
            if(Math.abs(iSpeed)<1 && Math.round(left)==iTarget){
                clearInterval(timer);
            }
        }, 30);
    }
})(window);