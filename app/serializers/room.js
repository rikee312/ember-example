import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  primaryKey: 'category',

  normalizeResponse (store, primaryModelClass, payload, id, requestType)  {

    payload['rooms'] = payload.hotels[0].rooms;

    delete payload.hotels;

    let counter = 1;

    payload.rooms.forEach((data) => {
      data['id'] = counter;

      console.log(data.rates);
      store.pushPayload('rate', data.rates);

      counter++;
    });

    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
