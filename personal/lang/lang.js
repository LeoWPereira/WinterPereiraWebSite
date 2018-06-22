var langs = ['de', 
             'en', 
             'pt'];

var langCode = '';

var translate = function (jsdata)
{   
    $("[tkey]").each (function (index)
    {
        var strTr = jsdata [$(this).attr ('tkey')];
        
        $(this).html (strTr);
    });
}

langCode = Cookies.get('language');

if(langCode == undefined)
{
	langCode = navigator.language.substr(0, 2);
}

if($.inArray(langCode, langs) != -1)
{
	$.getJSON('lang/' + langCode + '.json', translate);
}

else 
{
	$.getJSON('lang/en.json', translate);
}

function TranslateStrings(_langCode)
{	
	Cookies.set('language', _langCode, { expires: 7 });
	
	if($.inArray(langCode, langs) != -1)
	{
		$.getJSON('lang/' + _langCode + '.json', translate);
	}
}