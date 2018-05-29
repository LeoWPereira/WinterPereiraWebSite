// preparing language file
var aLangKeys=new Array();
aLangKeys['de']=new Array();
aLangKeys['en']=new Array();
aLangKeys['pt']=new Array();

aLangKeys['de']['home']='HOME DE';

aLangKeys['en']['home']='HOME EN';

aLangKeys['pt']['home']='HOME PT';

$(document).ready(function() 
{
    // onclick behavior
    $('.lang').click(function() 
    {
        var lang = $(this).attr('id'); // obtain language id

        // translate all translatable elements
        $('.tr').each(function(i)
        {
          $(this).text(aLangKeys[lang][$(this).attr('key')]);
        });
    });
});