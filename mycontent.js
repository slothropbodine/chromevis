var loadfunction = window.onload;
window.onload = function(event){
	main();

    if(loadfunction) loadfunction(event);
}

function main()  {
	var hits = $("html").find("div > p.title > a");

	var titles = [];
    $.each(hits, function( index, value ) {
		titles.push({'text': this.text});
    });

	console.log(titles.length);
	if(titles.length > 25) {
		chrome.storage.sync.set({'titles': titles}, function() {
			console.log('Settings saved');
		});
	}

	chrome.storage.sync.get(["titles"], function(items){
	});
}


