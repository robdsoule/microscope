// Configuring Router

Router.configure({
  // This tells the router to use layout template as the default template for all routes
  layoutTemplate: 'layout',
  loadingTemplate: 'loading', //template it will show waiting for waitOn
  notFoundTemplate: 'notFound', //template to use if no others are found
  waitOn: function() { return Meteor.subscribe('posts'); }
  // All routes will have access to posts, and will wait for it to have the data
  // needed to render
});

Router.route('/', {name: 'postsList'}); // Maps postsList route to the root path

Router.route('/posts/:_id', {
  name: 'postPage',
  data: function() { return Posts.findOne(this.params._id); }
});

// Will show notFound template for invalid routes but also any falsy data
// function returned from postPage route
Router.onBeforeAction('dataNotFound', {only: 'postPage'});
