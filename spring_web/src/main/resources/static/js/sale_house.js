$(function () {
    $('#getHouse').live("click",function(e) { /**查询按钮点击事件**/
        if(""!=$("#key").val()){/*搜索*/
            Sale_House.search();
        }else{/*普通条件查询*/
            var param = Sale_House.getCondition();
            Sale_House.getHouses(param);
        }
    });
    Sale_House.getHouses(Sale_House.searchConditionObj);/*初始化查询*/
    Sale_House.init();/*条件初始化*/
});
var Sale_House = {
    "searchConditionObj": {
        cityId: '10002', /**城市id**/
        pageSize: '10', /**城市名称**/
        pageNo: '1'
    },
    "init":function(){/*初始化城市信息*/
        var ajaxObj = {url: '/city/citys', async: true, param:{},method:"GET"};
        commonJS.sendAjaxRequest(ajaxObj, function (value) {
            $($("#city_template").render(value.data)).appendTo("#city");
        });
    },
    "getCountry":function (cityId) {/*根据城市Id取商圈*/
        var param = {"cityId":cityId};
        var ajaxObj = {url: '/city/citys', async: true, param:param,method:"GET"};
        commonJS.sendAjaxRequest(ajaxObj, function (value) {
            $($("#city_template").render(value.data)).appendTo("#country");
        });
    },
    "getBiz":function (countryId) {/*根据区县Id取商圈*/
        var param = {"countryId":countryId};
        var ajaxObj = {url: '/city/citys', async: true, param:param,method:"GET"};
        commonJS.sendAjaxRequest(ajaxObj, function (value) {
            $($("#city_template").render(value.data)).appendTo("#country");
        });
    },
    "getCondition":function () {/*获取并组装查询条件*/
        var param = {"pageSize":10,"pageNo":1};
        if("0"!=$("#cityId").val()){
            param["cityId"] = $("#cityId").val();
        }else{
            param["cityId"] = 10002;
        }
        if("0"!=$("#countyId").val()){
            param["countyId"] = $("#countyId").val();
        }
        if("0"!=$("#businessDistrictId").val()){
            param["businessDistrictId"] = $("#businessDistrictId").val();
        }
        if("0"!=$("#room").val()){
            param["room"] = $("#room").val();
        }
        if(""!=$("#amountsStart").val()){
            param["amountsStart"] = $("#amountsStart").val();
        }
        if(""!=$("#amountsEnd").val()){
            param["amountsEnd"] = $("#amountsEnd").val();
        }
        if(""!=$("#area").val()){
            var area = $("#area").val();
            param["areaStart"] = area.split("-")[0];
            param["areaEnd"] = area.split("-")[1];
        }
        if(""!=$("#status").val()){
            param["status"] = $("#status").val();
        }
        alert(JSON.stringify(param));
        return param;
    },
    "search":function () {
        var param = {};
        if("0"!=$("#cityId").val()){
            param["cityId"] = $("#cityId").val();
        }else{
            param["cityId"] = 10002;
        }
        param["key"] = $("#key").val();
        var ajaxObj = {url: '/saleHouse/houses', async: true, param:param,method:"GET"};
        commonJS.sendAjaxRequest(ajaxObj, function (value) {
            $("#sale_houses").html($("#sale_houses_template").render(value.data));
            if(value.totalPage>10){
                value["pageList"] = new Array(10);
            }else{
                value["pageList"]= new Array(value.totalPage);
            }
            $("#mould-page").html($("#mould-page_template").render(value));
        });
    },
    "getHouses": function (param) { /**可售房源信息查询**/
        var ajaxObj = {url: '/saleHouse/houses', async: true, param:param,method:"GET"};
        commonJS.sendAjaxRequest(ajaxObj, function (value) {
            $("#sale_houses").html($("#sale_houses_template").render(value.data));
            $("#mould-page").html($("#mould-page_template").render(value));
        });
    }
};