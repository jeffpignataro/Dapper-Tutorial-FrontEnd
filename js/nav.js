window.onload = function(){
    $.get("/shared/navbar.html", function(data){
        $("nav").html(data);
    });
}