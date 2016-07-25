/**
 * Created by lianx on 2016/5/25.
 */
function getClass(obj,name){
    return (obj.currentStyle || getComputedStyle(obj,false))[name]
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