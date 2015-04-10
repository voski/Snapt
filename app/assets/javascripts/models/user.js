Snapt.Models.User = Backbone.Model.extend({
  urlRoot: '/api/users',

  parse: function (resp) {
    if (resp.photos) {
      this.photos().set(resp.photos, { parse: true });
      delete resp.photos;
    }
    return resp;
  },

  photos: function () {
    if (!this._photos) {
      this._photos = new Snapt.Collections.Photos(
        [], { author: this }
      );
    }

    return this._photos;
  },

  authorized: function () {
    return this.id == Snapt.currentUser.id
  },
})
