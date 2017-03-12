define([
	'text!lib/templates/movies.html',
	'lib/helpers/webworker',
	'lib/helpers/storagemanager',
	'lib/helpers/get_average',
    'underscore'
],function(moviesTemplate, webworker, storage, averagescore, _) {
	genreView = {
		genre: '',
		container: document.querySelector('main'),
		genreTemplate: moviesTemplate,
		init: function(genre) {
			this.genre = genre; // set genre
			console.log(this.genre);
			if(!storage.storagemanager.getStorage('movies')) {
				webworker.task.init('http://dennistel.nl/movies', genreView);
				console.log('made new data request');
			} else {
				this.render(storage.storagemanager.getStorage('movies'));
				console.log('got items from localStorage');
			}
		},
		filter: function(data, filtergenre) {
			var moviedata = _.filter(data, function(movie) {
				return _.find(movie.genres, function(genre){
			        return genre === filtergenre;
			    });
			});
			return moviedata;
		},
		render: function(apidata) {
			moviedata = JSON.parse(apidata);
			_.each(moviedata, function(movie) {
				if (typeof movie.reviews !== 'undefined' && movie.reviews.length > 0) {
					movie.reviews = averagescore.get(movie.reviews, movie);
				}
			});
			moviedata = {movies: this.filter(moviedata, this.genre)}; // Is this nessescary?
			var template = _.template(this.genreTemplate);
			this.container.innerHTML = template(moviedata);
			document.querySelector('.subtitle').innerHTML = 'Favorite movies for genre: ' + '"' + this.genre + '"';
		}
	};
	return {
		movies: genreView
	}

});
