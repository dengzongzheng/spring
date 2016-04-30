/**
 * 房源详情
 */

//初始化
$(function(){
	houseDeatil.init();
	
	//联系人按钮点击触发事件
	$("input.blue-button").live("click", function(){
		$("#bg").show();
		$("#showDialog").show();
		$("#contactName").html($(this).attr("name"));
		$("#contactPhone").html($(this).attr("phone"));
	});
	
	//关闭弹框
	$("a.close-button").live("click", function(){
		$("#bg").hide();
		$("#showDialog").hide();
	});
});

var houseDeatil = {
	"init" : function() {
		var ajaxObj = {"url" : "/second-house/getSecondHouseDetail", "method" : "GET", "param" : {"primaryId" : "e7b28cd3-9ff8-4cdb-9f9c-9b11639d57f8"}};
		commonJS.sendAjaxRequest(ajaxObj, function(data){
			if(data){
				//渲染详情
				var dataObj = data.entity;
				$("#houseDetailDom").html($("#houseDetailTemplate").render(dataObj));
				$("#houseDetailPropertyDom").html($("#houseDetailProperty").render(dataObj));
				$("#houseDetailOwnerDom").html($("#houseDetailOwner").render(dataObj));
				$("#houseDetailSourceDom").html($("#houseDetailSource").render(dataObj));
			}
		});
	}
};