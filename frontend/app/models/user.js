import DS from 'ember-data';

export default DS.Model.extend({
	username   : DS.attr(),
	email      : DS.attr(),
	password   : DS.attr(),
	created_at : DS.attr(),
	updated_at : DS.attr()
});
