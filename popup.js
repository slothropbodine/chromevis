function onWindowLoad() {
	chrome.storage.sync.get(["titles"], function(items){
        $('#message').text(items["titles"][1].text);
        $('#message').after('<img id="thing" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1422163015i/13464993.png" alt="Smiley face">');

    });
}

window.onload = onWindowLoad;
