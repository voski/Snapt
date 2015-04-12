Snapt.Models.Photo = Backbone.Model.extend({
  urlRoot: '/api/photos',

  parse: function (resp) {
    return resp;
  },

  isAuthor: function() {
    return Snapt.currentUser.id === this.get('author_id');
  },

  cloudinaryUrl: function(options) {
    var params = {
      width: 800,
      height: 600,
      crop: 'fill'
    }

    return (
      $.cloudinary.image(
        this.escape('public_id'),
        params
      )[0].outerHTML
    )
  }
});
