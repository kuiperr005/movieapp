define([
	'text!lib/templates/about.html',
    'underscore'
],function(aboutTemplate, _) {
	aboutView = {
		container: document.querySelector('main'),
		template: aboutTemplate,
		init: function() {
			console.log('kickoff about section'); // render about section
			this.render();
		},
		render: function() {
			var template = _.template(this.template);
			this.container.innerHTML = template({title: 'About', description: 'Dit is een korte beschrijving van de Moviebucket app. Het is een enorm interessante app met vele mogelijkheden op het gebied van film.'});
		}
	};
	return {
		about: aboutView
	}

});
