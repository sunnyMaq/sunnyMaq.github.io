/**
 * Created by lianx on 2016/6/7.
 */
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

