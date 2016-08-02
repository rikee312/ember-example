import DS from 'ember-data';

export default DS.Model.extend({
  award: DS.attr('string'),
  hotel: DS.belongsTo('hotel'),
  rates: DS.hasMany('rate')
});
