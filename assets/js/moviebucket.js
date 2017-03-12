// ----------------------------------------------------- //
// APP JS DEELTOETS 2 - RUBEN KUIPERS
// ----------------------------------------------------- //

// var moviebucket = moviebucket || {};

define([
    'router'
],function(mainRouter) {
	controller = {
		init: function() {
			console.log ('kickoff router from moviebucket file');
			mainRouter.router.init(); // kickoff router
		}
	};
	return {
		controller: controller
	};
});