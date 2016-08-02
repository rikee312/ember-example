import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  normalizeResponse (store, primaryModelClass, payload, id, requestType)  {

    // console.log(payload);
    // console.log('===');

    // payload.hotels.forEach((data) => {

    //   delete data.
    //   console.log(data);
    // })

    return this._super(...arguments);
  }
});
