import DS from 'ember-data';

export default DS.Model.extend({
	username   : DS.attr(),
	email      : DS.attr(),
	password   : DS.attr(),
	friends    : DS.hasMany('user', {async: true}),
	events     : DS.hasMany('event', {async: true}),
	created_at : DS.attr(),
	updated_at : DS.attr()
});
