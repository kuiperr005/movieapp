utils = {
	// some easy util objects
	getFirstElement: function(element) {
		return document.querySelector(element);
	},
	getAllElements: function(element) {
		return document.querySelectorAll(element);
	},
	toggleClass: function(element, classname) {
		return document.querySelector(element).classList.toggle(classname);
	},
	addClass: function(element, classname) {
		return document.querySelector(element).classList.add(classname);
	},
	removeClass: function(element, classname) {
		return document.querySelector(element).classList.remove(classname);
	}
};