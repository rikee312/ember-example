import RESTAdapter from 'ember-data/adapters/rest';

export default RESTAdapter.extend({
  host: 'http://ec2-54-172-57-71.compute-1.amazonaws.com:5000',

  namespace: 'api',
});
