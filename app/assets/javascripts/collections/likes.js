Snapt.Collections.Likes = Backbone.Collection.extend({
  model: Snapt.Models.Like,

  url: function () {
    return '/api/photos' + this.photo.id + '/likes'
  },
});
