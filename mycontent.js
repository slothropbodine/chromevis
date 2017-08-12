var loadfunction = window.onload;
window.onload = function(event){
	main();

    if(loadfunction) loadfunction(event);
}

function main()  {
	console.log('ff');
	var barart = $("#playerBarArt");
	barart.change(function() {
	});
	//chrome.storage.sync.set({'titles': titles}, function() { });
}


