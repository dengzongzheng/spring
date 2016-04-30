$(function () {

    $('#getHouse').live("click",function(e) { /**查询按钮点击事件**/
        var param = "{";
        if("0"!=$("#cityId").val()){
            Sale_House.searchConditionObj.cityId = $("#cityId").val();
            param += "cityId:"+ $("#cityId").val();
        }else{
            param += "cityId:"+ 10002;
        }
        if("0"!=$("#countyId").val()){
            Sale_House.searchConditionObj.countyId = $("#countyId").val();
            param += ",countyId:"+ $("#countyId").val();
        }
        if("0"!=$("#businessDistrictId").val()){
            Sale_House.searchConditionObj.businessDistrictId = $("#businessDistrictId").val();
            param += ",businessDistrictId:"+ $("#businessDistrictId").val();
        }
        if("0"!=$("#room").val()){
            Sale_House.searchConditionObj.room = $("#room").val();
            param += ",room:"+ $("#room").val();
        }
        if(""!=$("#amountsStart").val()){
            Sale_House.searchConditionObj.amountsStart = $("#amountsStart").val();
            param += ",amountsStart:"+ $("#amountsStart").val();
        }
        if(""!=$("#amountsEnd").val()){
            Sale_House.searchConditionObj.amountsEnd = $("#amountsEnd").val();
            param += ",amountsEnd:"+ $("#amountsEnd").val();
        }
        param +=",pageSize:10"
        param +=",pageNo:1"
        param +="}";
        alert(param);
        Sale_House.getHouses(param);
    });
   Sale_House.getHouses(Sale_House.searchConditionObj);
});
var Sale_House = {
    "searchConditionObj": {
        cityId: '10002', /**城市id**/
        pageSize: '10', /**城市名称**/
        pageNo: '1'
    },
    "init":function(){
        var ajaxObj = {url: '/city/citys', async: true, param:{},method:"GET"};
        commonJS.sendAjaxRequest(ajaxObj, function (value) {
            alert("ddddd");
            $($("#city_template").render(value.data)).appendTo("#city");
        });
    },
    "getHouses": function (param) { /**可售房源信息查询**/
        var ajaxObj = {url: '/saleHouse/houses', async: true, param:{cityId:this.searchConditionObj.cityId,pageSize:this.searchConditionObj.pageSize,pageNo:this.searchConditionObj.pageNo},method:"GET"};
        commonJS.sendAjaxRequest(ajaxObj, function (value) {
            $("#sale_houses").html($("#sale_houses_template").render(value.data));
            $("#mould-page").html($("#mould-page_template").render(value));
        });
        Sale_House.init();
    }
}