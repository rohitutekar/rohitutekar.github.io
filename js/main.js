(function() {
	console.log("App loaded")
	if ('serviceWorker' in navigator) {
		window.addEventListener('load', function() {
			navigator.serviceWorker.register('./sw.js').then(function(registration) {
				// Registration was successful
				console.log('ServiceWorker registration successful with scope: ', registration.scope);
			}, function(err) {
				// registration failed :(
				console.log('ServiceWorker registration failed: ', err);
			});
		});
	}
	
	if (navigator.onLine) {
		updateConnectionStatus(true);
	} else {
		updateConnectionStatus(false);
	}

	window.addEventListener('online', function(e) {
		updateConnectionStatus(true);
	}, false);

	window.addEventListener('offline', function(e) {
		updateConnectionStatus(false);
	}, false);

})();

function updateConnectionStatus(nStatus) {
	let wrapper = document.getElementById('main-wrapper');
	let statusText = document.getElementById('status-text');
	if(nStatus) {
		wrapper.classList.add("online");
		wrapper.classList.remove("offline");
		statusText.innerText = "Online";
	} else {
		wrapper.classList.add("offline");
		wrapper.classList.remove("online");
		statusText.innerText = "Offline";
	}
}