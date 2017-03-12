define([
	'underscore'
],function(_) {
	averagescore = {
		getAverage: function(list, parent) {
			list = _.chain(list) // starts chain using the list array
			    .map(function(parent) {
					return {
					    singleScore: parent.score
					}
				})
			    .reduce(function(memo, parent) {
					return memo + parent.singleScore;
				}, 0)
			    .value() / list.length; // get value from chain

			var score = parseFloat(list); // get number from string
			var rounded_score = parseFloat(score.toFixed(1)); // round number to one decimal
			return JSON.stringify(rounded_score); // return JSON with new rounded score
		}
	}
	return {
		get: averagescore.getAverage
	}

});