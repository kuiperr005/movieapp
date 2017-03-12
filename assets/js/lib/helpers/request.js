self.addEventListener('message', function(e) {

	// Above promise not working so old fancy XMLHttpRequest here
	var request = new XMLHttpRequest;
	request.open("GET", e.data, true);
	request.setRequestHeader('Content-type','application/json');
	request.send(null);

	request.onreadystatechange = function() {
		if (request.readyState === 4) {
			if (request.status === 200 || request.status === 201) {
  				self.postMessage(request.response);
			}
		}
	}

}, false);

