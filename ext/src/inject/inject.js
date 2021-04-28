chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		console.log("Hello from Always Pytorch extension");
		var tab = document.querySelector("div.mdl-tabs__tab-bar a[href*='pytorch']")
		if (tab) {
			tab.click()
		}
	}
	}, 10);
});
