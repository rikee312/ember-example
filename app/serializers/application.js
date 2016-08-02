import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  payloadKeyFromModelName: function(modelName) {
    return modelName;
  }
});
