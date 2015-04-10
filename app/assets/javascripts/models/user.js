Snapt.Models.User = Backbone.Model.extend({
  urlRoot: '/api/users',

  parse: function (resp) {
    if (resp.photos) {
      this.photos().set(resp.photos, { parse: true });
      delete resp.photos;
    }

    if (resp.followees) {
      this.followees().set(resp.followees, { parse: true });
      delete resp.followees;
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

  followees: function () {
    if (!this._followees) {
      this._followees = new Snapt.Collections.Users(
        [], { follower: this }
      )
    }

    return this._followees
  },

  authorized: function () {
    return this.id == Snapt.currentUser.id
  },
})
