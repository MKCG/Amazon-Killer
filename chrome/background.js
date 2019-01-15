chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    switch(request.type) {
        case "dom-loaded":
        	var ISBN = request.data.ISBN;

        	chrome.browserAction.onClicked.addListener(function(tab) {
    		    chrome.tabs.create({ url: "https://www.parislibrairies.fr/livre/" + ISBN });
        	});
        	
        break;
    }
    return true;
});

