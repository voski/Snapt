Snapt.Models.Photo = Backbone.Model.extend({
  urlRoot: '/api/photos',

  parse: function (resp) {
    return resp;
  },

  isAuthor: function() {
    return Snapt.currentUser.id === this.get('author_id');
  }
});
