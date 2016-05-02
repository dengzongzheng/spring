$(function () {
   //jsrender.pages();
    jsrender.pagination();
});
var jsrender = {

    "pages":function () {
        var data = {"pageNo":1,"pageSize":10,"totalPage":20,"totalCount":100,"data":[{"id":1},{"id":1},{"id":1},{"id":1}]};
        if(data.totalPage>10){
            data["pageList"] = new Array(10);
        }else{
            data["pageList"]= new Array(data.totalPage);
        }
        $("#pagination-holder").html($("#pages").render(data));
    },
    "pagination":function () {
        $('#pagination-holder').twbsPagination({
            first:"首页",
            prev:"上一页",
            next:"下一页",
            last:"尾页",
            paginationClass:"page-list clearfix",
            visiblePages:10,
            initiateStartPageClick:false,
            totalPages: 35,
            onPageClick: function (event, page) {
                alert(page);
            }
        });
    }
};