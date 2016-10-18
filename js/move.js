
function getStyle(obj,name){
    return (obj.currentStyle || getComputedStyle(obj,false))[name];
}

function move(obj,json,options){
    clearInterval(obj.timer);
    options=options || {};
    options.time=options.time || 2000;
    options.type=options.type || 'linear';

    var start={};
    var dis={};
    var iCount=parseInt(options.time/90);
    for(var name in json){
        start[name]=parseFloat(getStyle(obj,name));
        dis[name]=json[name]-start[name];
    }
    var n=0;
    obj.timer=setInterval(function(){
        n++;
        for(var name in json){
            var cur=start[name]+dis[name]/iCount*n;
            switch (options.type){
                case 'linear':
                    var a=n/iCount;
                    var cur=start[name]+dis[name]*a;
                    break;
                case 'ease-in':
                    var a=n/iCount;
                    var cur=start[name]+dis[name]*a*a*a;
                    break;
                case 'ease-out':
                    var a=1- n/iCount;
                    var cur=start[name]+dis[name]*(1-a*a*a);
                    break;
            }
            if(name=='opacity'){
                obj.style.opacity=cur;
                obj.style.filter='alpha(opacity='+cur*100+')';
            }else {
                obj.style[name]=cur+'px';
            }
        }
        if(n==iCount){
            clearInterval(obj.timer);
        }
    },30)
}