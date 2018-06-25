$(function() {
    $(".preload").fadeOut(1000, function() {
    	 $(document).ready(function() {
		   $(".content").fadeIn(100);
		 });
    });
});

$(function()
{
	if(Cookies.get('currentPageToShow') == undefined)
	{
		Cookies.set('currentPageToShow', "./html/home.html", { expires: 1 });
	}

	$('document').ready(function(){                    
		$("#PageToShow").load(Cookies.get('currentPageToShow'));
    });
	
	$("#menu_Home").click(function(){
    	Cookies.set('currentPageToShow', "./html/home.html", { expires: 1 });
    	
    	$("#PageToShow").load(Cookies.get('currentPageToShow'));
    });

	$("#menu_About").click(function(){
    	Cookies.set('currentPageToShow', "./html/about.html", { expires: 1 });
    	
    	$("#PageToShow").load(Cookies.get('currentPageToShow'));
    });

    $("#menu_Resume").click(function(){
    	Cookies.set('currentPageToShow', "./html/resume.html", { expires: 1 });
    	
    	$("#PageToShow").load(Cookies.get('currentPageToShow'));
    });

    $("#menu_Publications").click(function(){
    	Cookies.set('currentPageToShow', "./html/publications.html", { expires: 1 });
    	
    	$("#PageToShow").load(Cookies.get('currentPageToShow'));
    });

    $("#menu_Contact").click(function(){
    	Cookies.set('currentPageToShow', "./html/contact.html", { expires: 1 });
    	
    	$("#PageToShow").load(Cookies.get('currentPageToShow'));
    });
});