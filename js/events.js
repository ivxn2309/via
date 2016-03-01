
$(document).ready(function() {
    var tmpImg = new Image() ;
    tmpImg.onload = function() {
        setTimeout(function(){
		    $(".se-pre-con").fadeOut("slow");
		    $("#web-content").css("display","inherit");
		}, 
		900);
    };
    tmpImg.src = 'img/background.png';
});