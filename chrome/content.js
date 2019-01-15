var iconURL = 'https://static.epagine.fr/mediaweb3/5435/favicon-32x32.png';
var ISBN = $( ".content ul li:contains('ISBN-13')" ).text().split(':')[1].replace(/[^0-9]/g, '');

var button =
    '<div class="a-button-stack">'+
        '<a href="https://www.parislibrairies.fr/livre/' + ISBN + '" target="_blank">'+
            '<span class="a-button a-spacing-small a-button-primary a-button-icon">'+
                '<span class="a-button-inner">'+
                    '<i style="background-image:url(' + iconURL + '); background-size:25px 25px; background-position: center;" class="a-icon a-icon-cart"></i>'+
                    '<span id="submit.add-to-cart-announce" class="a-button-text" aria-hidden="true">'+
                    	'Acheter chez "Paris Librairies"'+
                    '</span>'+
                '</span>'+
            '</span>'+
        '</a>'+
    '</div>';

$('#bbop-sbbop-container').after(button);

window.addEventListener("load", function() {
    chrome.extension.sendMessage({
        type: "dom-loaded", 
        data: { ISBN : ISBN }
    });
}, true);
