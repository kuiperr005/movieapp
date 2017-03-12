define([
	'text!lib/templates/movie.html',
	'lib/helpers/webworker',
	'lib/helpers/storagemanager',
	'lib/helpers/get_average',
    'underscore'
],function(movieTemplate, webworker, storage, averagescore, _) {
	movieView = {
		container: document.querySelector('main'),
		movieTemplate: movieTemplate,
		movieID: -1,
		init: function(id) {
			this.movieID = id - 1; // set id to the right number
			// call webworker
			if(!storage.storagemanager.getStorage('movies')) {
				webworker.task.init('http://dennistel.nl/movies', movieView);
				console.log('made new data request');
			} else {
				// render from localhost
				this.render(storage.storagemanager.getStorage('movies'));
				console.log('got items from localStorage');
			}
		},
		render: function(apidata) {
			// parse json data
			moviedata = JSON.parse(apidata);
			if (typeof moviedata[this.movieID].reviews !== 'undefined' && moviedata[this.movieID].reviews.length > 0) {
				moviedata[this.movieID].reviews = averagescore.get(moviedata[this.movieID].reviews, moviedata[this.movieID]);
			}
			moviedata = moviedata[this.movieID]; // Is this nessescary?
			// render data
			var template = _.template(this.movieTemplate);
			this.container.innerHTML = template(moviedata);
		}
	};
	return {
		movies: movieView
	}

});