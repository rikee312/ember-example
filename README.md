# Ember-example

This is a Example App to do an integration with an example API:

`http://ec2-54-172-57-71.compute-1.amazonaws.com:5000/api/hotels/17219/rooms/2`

The `hotels/{hotel_id}/rooms/{room_id}` is the schema. CORS is enabled on server.

## The Test

1. Fork this project, configure the adapter os application, setup the model and routes to do a `GET` on our API.

2. What we want to see done is a way to trigger the `get` by user for the provided endpoint. The user should have a way to specify both `hotel_id` and `room_id`. 

3. Please take into account that this is just a single endpoint in a very big application with many other endpoints present and the api address, specifically `http://ec2-54-172-57-71.compute-1.amazonaws.com:5000` would be changed in the future. Try to take this into account when implementing the test-task.

4. The `room` model primary key is `rateToken` inside the `rates` array. Please assume that for every room the related `rateToken` which is primary key is the first one in the array. Implement the adapter/serializer/model in such way that the primary key for room is set correctly on data fetch.
 

After that,  commit in a public repository. Send the link to us.

Good lucky!