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
      width: 610,
      height: 610,
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
