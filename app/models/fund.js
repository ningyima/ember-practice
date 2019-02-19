import DS from 'ember-data';

export default DS.Model.extend({
  model: DS.attr(),
  pk: DS.attr(),
  fields: DS.attr(),
  // title: DS.attr()
});
