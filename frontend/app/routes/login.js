import Em from 'ember';

export default Em.Route.extend({
	setupController: function(controller, model) {
		controller.set('errorMessage', null);
	}
});