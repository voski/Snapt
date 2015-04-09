Snapt.Collections.Users = Backbone.Collection.extend({
  url: '/api/users',
  model: Snapt.Models.User,

  getOrFetch: function (id) {
    collection = this;

    var model = this.get(id);
    if (model) {
      model.fetch()
    } else {
      model = new Snapt.Models.User({id: id })
      model.fetch({
        success: function () {
          collection.add(model)
        }
      });
    }

    return model;
  }
});

Snapt.Collections.users = new Snapt.Collections.Users();
