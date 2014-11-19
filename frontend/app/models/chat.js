import DS from 'ember-data';

export default DS.Model.extend({
	message    : DS.attr(),
  user       : DS.belongsTo('user'),
	created_at : DS.attr(),
	updated_at : DS.attr()
});
