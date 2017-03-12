define([
	'text!lib/templates/movies.html',
	'lib/helpers/webworker',
	'lib/helpers/storagemanager',
	'lib/helpers/get_average',
    'underscore',
    'lib/views/menu'
],function(moviesTemplate, webworker, storage, averagescore, _, menuView) {
	moviesView = {
		container: document.querySelector('main'),
		moviesTemplate: moviesTemplate,
		data: '',
		splash: true,
		init: function() {
			if(!storage.storagemanager.getStorage('movies')) {
				webworker.task.init('http://dennistel.nl/movies', moviesView);
				console.log('made new data request');
			} else {
				this.render(storage.storagemanager.getStorage('movies'));
				console.log('got items from localStorage');
			}
		},
		render: function(apidata) {
			moviedata = JSON.parse(apidata);
			_.each(moviedata, function(movie) {
				if (typeof movie.reviews !== 'undefined' && movie.reviews.length > 0) {
					movie.reviews = averagescore.get(movie.reviews, movie);
				}
			});
			var self = this;
			this.data = moviedata;
			moviedata = { movies: moviedata }; // Is this nessescary?
			var template = _.template(this.moviesTemplate);
			// splash
			if (this.splash === true) {
				setTimeout(function(){
					document.querySelector('.splash').classList.add('out');
					self.splash = false;
				}, 1000);
			}
			this.container.innerHTML = template(moviedata);
		}
	};
	return {
		movies: moviesView
	}

});
