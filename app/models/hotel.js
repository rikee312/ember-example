import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  award: DS.attr('string'),
  isPreferential: DS.attr('boolean'),
  rooms: DS.hasMany('room')
});
