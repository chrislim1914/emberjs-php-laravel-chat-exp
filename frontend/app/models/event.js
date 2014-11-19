import DS from 'ember-data';

export default DS.Model.extend({
  where      : DS.attr(),
  when       : DS.attr(),
  created_at : DS.attr(),
  updated_at : DS.attr()
});
