// This publishes all posts so we can subscribe to them on the client side

Meteor.publish( 'posts', function() {
  return Posts.find();
});
