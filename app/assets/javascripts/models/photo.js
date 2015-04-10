Snapt.Models.Photo = Backbone.Model.extend({
  urlRoot: '/api/photos',

  parse: function (resp) {
    return resp;
  },

  isAuthor: function() {
    return Snapt.currentUser.id === this.get('author_id');
  },

  cloudinaryUrl: function(options) {
    return (
      $.cloudinary.image(
        this.escape('public_id'),
        { width: 510, height: 510, crop: 'fill' }
      )[0].outerHTML
    )

  }
});
