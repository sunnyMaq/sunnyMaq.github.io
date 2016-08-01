function rnd(n,m){
    return parseInt(Math.random()*(m-n)+n);
}
window.onload=function(){
    var oSend=document.getElementById('send');
    var oLayer=document.getElementById('layer');
    var oSendForm=document.getElementById('send-form');
    var oMain=document.getElementById('main');
    var oUserName=document.getElementById('username');
    var oContent=document.getElementById('content');
    var clientW=document.documentElement.clientWidth;
    var clientH=document.documentElement.clientHeight;
    var oClose=document.getElementById('close');
    var oSendBtn=document.getElementById('send-btn');
    var oPhiz=document.getElementById('phiz');
    var aImg=oPhiz.getElementsByTagName('img');
    var zIndex=0;


    oSend.onclick=function(){
        oLayer.style.display='block';
        oSendForm.style.display='block';
        oSendForm.style.zIndex=99999999999999;

        oSendForm.style.left=clientW/2-200+'px';
    };
    oClose.onclick=function(){
        oLayer.style.display='none';
        oSendForm.style.display='none';
    };
//        1. 发表许愿
//        wish.php?act=add&username=xxx&content=xxx
//        {error:1, msg:xxx}
    var url='wish.php';
    oSendBtn.onclick=function(){
        ajax({
            url:url,
            data:{
                act:'add',
                username:oUserName.value,
                content:oContent.value
            },
            fnSucc:function(str){
                var json=eval('('+str+')');

                if(json.error){
                    alert('发表心愿失败！')
                }else{
                    var oDl=createMsg(oUserName.value,oContent.value);
                    oMain.appendChild(oDl);
                }
                getAllMsg();
                oLayer.style.display='none';
                oSendForm.style.display='none';
                oUserName.value='';
                oContent.value='';
            }
        });
    };
    function createMsg(userName,content,id,time){
        var oDl=document.createElement('dl');
        oDl.className='paper a'+rnd(1,6)+'';
        var oDate=new Date();
        oDate.setTime(time*1000);
        var str=oDate.getHours()+':'+oDate.getMinutes();
        oDl.innerHTML='<dt>'
            +'<span class="username">'+userName+'</span>'
            +'<span class="num">No.00001</span>'
            +'</dt>'
            +'<dd class="content">'+toFace(content)+'</dd>'
            +'<dd class="bottom">'
            +'<span class="time">今天'+str+'</span>'
            +'<a href="javascript:;" class="close"></a>';
        +'</dd>';
//            3. 删除心愿
//            wish.php?act=delete&id=0;
//            {error:1, msg:xxx}
        var aA=oDl.getElementsByTagName('a')[0];
        aA.onclick=function(){
            ajax({
                url:url,
                data:{
                    act:'delete',
                    id:id
                },
                fnSucc:function(str){
                    var json=eval('('+str+')');
                    if(json.error){
                        alert('删除失败！');
                    }else{
                        oMain.removeChild(oDl);
//                            getAllMsg();
                    }
                }
            });
        };
        oDl.style.left=rnd(0,clientW-400)+'px';
        oDl.style.top=rnd(0,clientH-360)+'px';
        return oDl;
    }
    //获取所有的数据
//        2. 获取所有心愿
//        wish.php?act=get
//        {error:0, msg:[{'id':1, 'username':'xxx', 'content':'xxx'},{},{},{}.......]}
    function getAllMsg(){
        oMain.innerHTML='';
        ajax({
            url:url,
            data:{
                act:'get',
            },
            fnSucc:function(str){
                var json=new Function('return '+str)();
                if(json.error){
                    alert('获取所有心愿失败！');
                }else{
                    var arr=json.msg;
                    for(var i=0;i<arr.length;i++){
                        var oDl=createMsg(arr[i].username,arr[i].content,arr[i].id,arr[i].time);
                        drag(oDl);
                        oMain.appendChild(oDl);
                    }
                }
            }
        })
    }
    getAllMsg();
    function drag(obj){
        obj.onmousedown=function(ev){
            var oEvent=ev||event;
            var disX=oEvent.clientX-obj.offsetLeft;
            var disY=oEvent.clientY-obj.offsetTop;
            obj.style.zIndex=zIndex++;
            document.onmousemove=function(ev){
                var oEvent=ev||event;
                var l=oEvent.clientX-disX;
                var t=oEvent.clientY-disY;

                obj.style.left=l+'px';
                obj.style.top=t+'px';
            };
            document.onmouseup=function(){
                document.onmousemove=null;
                document.onmouseup=null;
            };
            return false;

        }
    }
    //添加表情

    for(var i=0;i<aImg.length;i++){
        aImg[i].onclick=function(){
            oContent.value+='['+this.alt+']';
        }
    }

    function toFace(str){
        var arr1=['[抓狂]','[抱抱]','[害羞]','[酷]','[嘻嘻]','[太开心]','[偷笑]','[钱]','[花心]','[挤眼]'];
        var arr2=['zhuakuang','baobao','haixiu','ku','xixi','taikaixin','touxiao','qian','huaxin','jiyan'];

        for(var i=0;i<arr1.length;i++){
            if(str.indexOf(arr1[i])!=-1){
                str=str.replace(arr1[i],'<img src="../Images/phiz/'+arr2[i]+'.gif" alt="酷" />');

                i--;
            }

        }
        return str;
    }
};


