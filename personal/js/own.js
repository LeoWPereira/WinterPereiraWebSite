$(function() {
    $(".preload").fadeOut(100, function() {
    	 $(document).ready(function() {
		   $(".content").fadeIn(100);
		 });
    });

    $("#MenuContent").load("./html/menu.html");
});