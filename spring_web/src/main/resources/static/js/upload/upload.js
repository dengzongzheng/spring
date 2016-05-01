$(function () {
    $("#upload").click(function () {
        var btn = $("input[name='files']");
        var form = $("#fileUpload")
        new ss.SimpleUpload({
            button: btn,
            multipart: true,
            hoverClass: 'hover',
            focusClass: 'focus',
            responseType: 'json',
            startXHR: function() {
            },
            onSubmit: function() {
            },
            onComplete: function( filename, response ) {

            },
            onError: function() {
            }
        });
    });
});