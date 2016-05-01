$(function () {
    cityObj.getCitys();
});

var cityObj = {

    "getCitys":function () {
        var ajaxObj = {url: '/city', async: true, param:{},method:"GET"};
        commonJS.sendAjaxRequest(ajaxObj, function (value) {
            $("#citys").html($("#city_template").render(value));
        });
    }

};