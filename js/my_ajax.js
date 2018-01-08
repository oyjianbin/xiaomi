var my_ajax = {
    // 负责get请求: 参数1:url地址 参数2:ajax请求成功时候的回调 参数3:失败之后的回调
    get: function (url, onSuccess, onFail){
        if (!(typeof onSuccess == "function")) return;
        var xhr = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
        xhr.open("GET", url);
        xhr.onreadystatechange = function (){

            if (xhr.readyState == 4){
                if (xhr.status == 200 || xhr.status == 304){
                    onSuccess(xhr.responseText);
                }else{
                    if (typeof onFail == "function"){
                        // 失败的时候的回调.  参数传递过去失败的 响应码
                        onFail(xhr.status);
                    }
                }
            }
        }
        xhr.send(null);
    },
    // post请求
    post: function (url, data, onSuccess, onFail){
        if (!(typeof onSuccess == "function")) return;
        var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
        xhr.open("POST", url);
        xhr.onreadystatechange = function (){
            if (xhr.readyState === 4){
                if (xhr.status === 200 || xhr.status == 304){
                    onSuccess(xhr.responseText);
                }else{
                    if (typeof onFail == "function"){
                        onFail(xhr.status)
                    }
                }
            }
        };
        //在发送请求之前必须添加这个请求头. 表示对表单数据进行url编码
        if (typeof data == "string"){
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
        }
        xhr.send(data);  // user=abc&pwd=aaa
    }
}

