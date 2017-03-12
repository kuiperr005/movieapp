define(function() {
	storagemanager = {
		setData: function(storage_name, responsedata) {
			// set responsedata in localStorage
			localStorage.setItem(storage_name, responsedata);
		},
		getStorage: function(storage_name) {
			// Get local storage item
			var storage = localStorage.getItem(storage_name);
			return storage;
		}
	};
	return {
		storagemanager: storagemanager
	}
});