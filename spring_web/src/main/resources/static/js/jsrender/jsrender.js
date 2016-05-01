$(function () {
   jsrender.pages();
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
    }
};