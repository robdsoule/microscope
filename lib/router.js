// Configuring Router

Router.configure({
  // This tells the router to use layout template as the default template for all routes
  layoutTemplate: 'layout'
});

Router.route('/', {name: 'postsList'}); // Maps postsList route to the root path
