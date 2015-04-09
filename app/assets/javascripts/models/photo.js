Snapt.Models.Photo = Backbone.Model.extend({
  urlRoot: '/api/photos',

  parse: function (resp) {
    return resp;
  }
});
