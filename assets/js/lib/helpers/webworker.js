define([
	'require',
	'lib/helpers/storagemanager'
],function(require, storage) {
	worker = {
		init: function(url, view) {
			this.request('assets/js/lib/helpers/request.js', url, 'no-repeat', view);
			this.update('assets/js/lib/helpers/request.js', url);
		},
		update: function(filepath, url) {
			setInterval(function() {
				worker.request(filepath, url, 'repeat');
			}, 5000);
		},
		request: function(filepath, url, mode, view) {
			// initialize webworker
			var requestWorker = new Worker(filepath);
			requestWorker.postMessage(url);
			console.log('sent data url to worker');

			requestWorker.addEventListener('message', function(e) {
				// Store Data object in localStorage
				storage.storagemanager.setData('movies', e.data);
				if(mode === 'no-repeat') {
					// file movie array with latest movies
					view.render(e.data); // Callback!
				}
			}, false);
		}
	};
	return {
		task: worker
	}
});