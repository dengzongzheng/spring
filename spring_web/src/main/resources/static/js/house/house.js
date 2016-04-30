var houseObj = {
    "searchConditionObj": {
    	provinceId: '', /**省id**/
		city: '', /**城市id**/
		county: '', /**区域ID**/
		minHouseTotalPrice: 0,
		maxHouseTotalPrice: 0,
		apartmentLayout: "",
		key: "",
        pageSize: '20', /**城市名称**/
        pageNo: '1'
    },
    "getHouses": function () {
        /**房源信息查询**/
        var ajaxObj = {url: '/second-house/querySecondHouseList', param: houseObj.searchConditionObj, method:"GET"};
        commonJS.sendAjaxRequest(ajaxObj, function (value) {
            //$("#wellHouse").html($("#wellHouses").render(value));
			if(value.status != 200) {
				alert("请求失败,请重试!");
				return false;
			}
			if(!value.entity || value.entity.list.length == 0){
				alert("查询记录为空!");
				return false;
			}
            var domHTML=[];
            $.each(value.entity.list, function (i, data) {
                domHTML.push($("#house").render(data));
            });
           // $("#dataContentDom").html(domHTML.join(""));
			document.getElementById("dataContentDom").innerHTML=domHTML.join("");
            //渲染页面分页信息
            var pageObj = value.entity;
            $("#totalCountDom").html(pageObj.totalCount);
            var page = [];
            if(pageObj.pageNo != 1){
            	page.push('<a href="javascript:void(0);" onclick="houseObj.getPageRecords(1)">首页</a>');
            	page.push('<a href="javascript:void(0);" onclick="houseObj.getPageRecords('+(pageObj.pageNo-1)+')">上一页</a>');
            }
            //当前页码数
            for(var i = 1; i < pageObj.totalPage+1; i++) {
            	if(i == pageObj.pageNo){
            		page.push('<b>'+pageObj.pageNo+'</b>');
            	}else{
            		page.push('<a href="javascript:void(0);" onclick="houseObj.getPageRecords('+i+')">'+i+'</a>');
            	}
            }
            if(pageObj.pageNo != pageObj.totalPage){
            	page.push('<a href="javascript:void(0);" onclick="houseObj.getPageRecords('+(pageObj.pageNo+1)+')">下一页</a>');
            	page.push('<a href="javascript:void(0);" onclick="houseObj.getPageRecords('+pageObj.totalPage+')">尾页</a>');
            }
            page.push('<span class="pagelabel">共'+pageObj.totalCount+'页 到第 <input class="pageNum" type="number" maxPageNum="'+pageObj.totalPage+'" value="'+pageObj.pageNo+'" > 页</span>');
            page.push('<input class="pagebtn" type="button" onclick="houseObj.changeCurrentPage()" value="确定" />');
            $("#pageDom").html(page.join(""));
        });
    },
    "getPageRecords" : function(pageNo){
    	this.searchConditionObj.pageNo = pageNo;
    	this.getHouses();
    },
    "changeCurrentPage" : function(){
    	var obj = $("input.pageNum");
    	var currentPageNum = obj.val();
    	var maxPageNum = obj.attr("maxPageNum");
    	if(!/^\d+$/g.test(currentPageNum)){
    		alert("当前页码不为正整数!");
    		return false;
    	}
    	if(currentPageNum > maxPageNum){
    		alert("当前页码超过总页码数["+maxPageNum+"页]！");
    		return false;
    	}
    	this.getPageRecords(currentPageNum);
    },
    "seachResults" : function(){
    	var minHouseTotalPrice = $("[name=minHouseTotalPrice]").val();
    	var maxHouseTotalPrice = $("[name=maxHouseTotalPrice]").val();
    	var startBuiltArea = $("[name=builtArea]").find("option:selected").attr("startBuiltArea");
    	var endBuiltArea = $("[name=builtArea]").find("option:selected").attr("endBuiltArea");
    	var apartmentLayout = $("[name=apartmentLayout]").val();
    	var registrationStartTime = $("[name=registrationStartTime]").val();
    	var registrationEndTime = $("[name=registrationEndTime]").val();
    	var key = $("[name=key]").val();
    	if(minHouseTotalPrice){
    		this.searchConditionObj.minHouseTotalPrice = minHouseTotalPrice;
    	}
    	if(maxHouseTotalPrice) {
    		this.searchConditionObj.maxHouseTotalPrice = maxHouseTotalPrice;
    	}
 /*   	if(startBuiltArea) {
    		this.searchConditionObj.startBuiltArea = startBuiltArea;
    	}
    	if(endBuiltArea) {
    		this.searchConditionObj.endBuiltArea = endBuiltArea;
    	}*/
		if(apartmentLayout) {
    		this.searchConditionObj.apartmentLayout = apartmentLayout;
    	}
    	if(registrationStartTime) {
    		this.searchConditionObj.registrationStartTime = registrationStartTime;
    	}
    	if(registrationEndTime) {
    		this.searchConditionObj.registrationEndTime = registrationEndTime;
    	}
    	if(key && key != "请输入关键字(房源编号、小区名称)...") {
    		this.searchConditionObj.key = key;
    	}
    	this.getHouses();
    }
};

$(function(){
	goToTop();
	houseObj.getHouses();
	$("#startDate").focus(function(){
		WdatePicker({maxDate:'#F{$dp.$D(\'endDate\');}'});
	});

	$("#endDate").focus(function(){
		WdatePicker({minDate:'#F{$dp.$D(\'startDate\');}'});
	});
	
	//分页数据显示
	$("#pageButtion").change(function(){
		var perPage = $(this).val();
		houseObj.searchConditionObj.pageSize = perPage;
		houseObj.searchConditionObj.pageNo = 1;
		houseObj.getHouses();
	});
});