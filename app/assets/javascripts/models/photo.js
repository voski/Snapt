Snapt.Models.Photo = Backbone.Model.extend({
  urlRoot: '/api/photos',

  parse: function (resp) {
    if (resp.comments) {
      this.comments().set(resp.comments, { parse: true });
      delete resp.comments
    }
    return resp;
  },

  comments: function () {
    if (!this._comments) {
      this._comments = new Snapt.Collections.Comments(
        [], { photo: this }
      )
    }

    return this._comments
  },

  isAuthor: function() {
    return Snapt.currentUser.id === this.get('author_id');
  },

  width: function (width) {
    if (!width) {
      return this.get('coordinates')[2];
    }

    return width;
  },

  height: function (height) {
    if (!height) {
      return this.get('coordinates')[3];
    }
    return height;
  },

  cloudinaryUrl: function(options) {
    var params = {
      crop: 'fill',
    }

    jQuery.extend(params, options);

    return (
      $.cloudinary.image(
        this.escape('public_id'),
        params
      )[0].outerHTML
    )
  }
});
