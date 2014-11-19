import Em from 'ember';

export default Em.Route.extend({
	model: function() {
		return this.store.createRecord('user');
	},
	deactivate: function() {
		var content = this.controllerFor('register').get('content');
		if (content.get('isDirty')) {
			content.rollback();
		}
	}
});