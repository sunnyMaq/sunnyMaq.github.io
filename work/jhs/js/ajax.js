/**
 * Created by lianx on 2016/7/16.
 */

function ajax(json){
    if(!json.url){
        return;
    }
    if(window.XMLHttpRequest){
        var oAjax=new XMLHttpRequest();
    }else {
        var oAjax=new ActiveXObject('Microsof.XMLHTTP');
    }

    oAjax.open('GET',json.url,true);
    oAjax.send();

    oAjax.onreadystatechange=function(){
        if(oAjax.readyState==4){
            if(oAjax.status>=200 && oAjax.status<300 || oAjax.status==304){
                json.fnSucc && json.fnSucc(oAjax.responseText);
            }
        }else {
            json.fnFail && json.fnFail(oAjax.readyState);
        }
    }
}