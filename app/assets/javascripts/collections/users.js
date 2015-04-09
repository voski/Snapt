Snapt.Collections.Users = Backbone.Collection.extend({
  url: '/api/users',
  model: Snapt.Models.User,
});

Snapt.Collections.users = new Snapt.Collections.Users();
