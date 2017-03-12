define([
    'promise',
],function(promise) {

	// Setup an event listener that will handle messages sent to the worker.
	self.addEventListener('message', function(e) {

		// Do GET Request
		promise.get(e.data, {"Accept": "application/json"}).then(function(error, success, xhr) {
		    if (error) {
		        alert('Error ' + xhr.status);
		        return;
		    }
		    if(success) {
				// Send response in postmessage to Worker
				self.postMessage(xhr.response);
		    }
		});

	}, false);

});