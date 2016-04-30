$(function () {
    Sale_Detail.getHouseDetail();
});
var Sale_Detail = {
    "getHouseDetail": function () { /**可售房源详情信息查询**/
        var houseId = $("#houseId").val();
        var ajaxObj = {url: '/saleHouse/saleHouseDetail', async: true, param:{houseId:houseId},method:"GET"};
        commonJS.sendAjaxRequest(ajaxObj, function (value) {
            $("#sale_house_detail").html($("#sale_house_detail_template").render(value));
        });
    }
}