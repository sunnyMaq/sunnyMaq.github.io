function setUrl(json){json.t=Math.random();var arr=[];for(var name in json){arr.push(name+"="+json[name])}return arr.join("&")}function ajax(json){json=json||{};if(!json.url){return}json.type=json.type||"get";json.time=json.time||3000;json.data=json.data||{};var timer=null;if(window.XMLHttpRequest){var oAjax=new XMLHttpRequest()}else{var oAjax=new ActiveXObject("Microsoft.XMLHTTP")}switch(json.type.toLowerCase()){case"get":oAjax.open("get",json.url+"?"+setUrl(json.data),true);oAjax.send();break;case"post":oAjax.open("post",json.url,true);oAjax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");oAjax.send(setUrl(json.data));break}json.loading&&json.loading();oAjax.onreadystatechange=function(){if(oAjax.readyState==4){json.complete&&json.complete();if(oAjax.status>=200&&oAjax.status<300||oAjax.status==304){json.fnSucc&&json.fnSucc(oAjax.responseText)}else{json.fnFail&&json.fnFail(oAjax.status)}clearTimeout(timer)}};timer=setTimeout(function(){oAjax.onreadystatechange=null;alert("网络超时！需在服务器环境下运行，否则会出现报错！！！")},json.time)};