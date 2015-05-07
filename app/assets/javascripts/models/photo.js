Snapt.Models.Photo = Backbone.Model.extend({
  urlRoot: '/api/photos',

  parse: function (resp) {
    if (resp.comments) {
      this.comments().set(resp.comments, { parse: true });
      delete resp.comments
    }

    if (resp.likes) {
      this.likes().set(resp.likes, { parse: true })
      delete resp.likes
    }

    if (resp.author) {
      this.author().set(resp.author, { parse: true})
      delete resp.author
    }

    return resp;
  },

  author: function () {
    if (!this._author) {
      this._author = new Snapt.Models.User();
    }

    return this._author;
  },

  likes: function () {
    if (!this._likes) {
      this._likes = new Snapt.Collections.Likes(
        [], { photo: this }
      )
    }

    return this._likes
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
    return Snapt.currentUser.id === this.author().get('id');
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
    }

    var public_id = this.escape('public_id') || 'default-profile-pic_of1fqb'

    jQuery.extend(params, options);

    return (
      $.cloudinary.image(
        public_id,
        params
      )[0].outerHTML
    )
  }
});
