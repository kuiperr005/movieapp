define([
    'routie',
    'lib/views/about',
    'lib/views/movies',
    'lib/views/movie',
    'lib/views/genre',
    'lib/views/menu'
],function(routie, aboutView, moviesView, movieView, genreView, menuView) {
	router = {
		init: function() {
			menuView.menu.init();
			console.log("kickoff router from router file");
			routie({
				// root route - always show movies section on root
				' ': function() {
					moviesView.movies.init(); // kickoff sections
				},
				// about route
				'/about': function() {
					menuView.menu.closeMenu();
					aboutView.about.init();
				},
				// movie route
				'/movies': function() {
					menuView.menu.closeMenu();
					moviesView.movies.init();
				},
				// genre route
				'/movies/genre/:genre': function(genre) {
					menuView.menu.closeMenu();
					genreView.movies.init(genre);
				},
				// single movie route
				'/movies/:id': function(id) {
					movieView.movies.init(id);
				}
			});
		}
	};
	return {
		router: router
	};

});