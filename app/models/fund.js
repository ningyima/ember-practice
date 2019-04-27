import DS from 'ember-data';

const { Model, attr } = DS;

export default Model.extend({
  // model: attr(),
  // pk: attr(),
  // fields: attr(),
  title: attr('string'),
  selected: attr('boolean'),
  amount: attr('number'),
  pk: attr('string'),
});
