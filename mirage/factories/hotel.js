import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  id: '17219',
  name: 'Hotel 1',
  description: 'Hotel desc',
  award: '1',
  isPreferential: 'true',
  links(i) {
    return {
      rooms: 'http://ec2-54-172-57-71.compute-1.amazonaws.com:5000/api/hotels/17219/rooms/2'
    }
  }
});
