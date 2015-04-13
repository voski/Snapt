Snapt.Collections.Comments = Backbone.Collection.extend({
  model: Snapt.Models.Comment,

  url: function () {
    return 'api/photos/' + this.photo.id + '/comments'
  }
});
