export default function() {
  this.urlPrefix = 'http://ec2-54-172-57-71.compute-1.amazonaws.com:5000';
  this.namespace = 'api/';

  this.get('/hotels');

  this.passthrough('/hotels/**');
}
