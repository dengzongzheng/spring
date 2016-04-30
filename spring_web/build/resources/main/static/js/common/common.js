var commonJS = {//commonJS
    "sendAjaxRequest" : function(ajaxObj, callbackFn){//调用公用异步请求方法   ajaxObj对象主要包含请求参数(封装成对象)、请求地址url
        var url = ajaxObj.url;
        var param = ajaxObj.param;
        var async = ajaxObj.async;//true、false 判断异步请求的类型，同步还是异步
        if(!ajaxObj.hasOwnProperty("async")) async = true;
        var method = ajaxObj.method;
        if(!method) method = "GET";
        if(!param) param = {};//参数不存在 就给一个默认的参数
        $.ajax({
            type : method,
            url : url,
            data : param,
            async : async,
            dataType : 'json',
            success : function(json){
                if(callbackFn && typeof callbackFn === 'function'){
                    callbackFn(json);
                }
            },
            error : function(jqXHR, textStatus, errorThrown){

            }
        });
    }

};

$(function() {
    //支持jquery的ajax函数跨域请求
    jQuery.support.cors = true;
});
