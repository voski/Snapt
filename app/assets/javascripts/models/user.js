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

    if (resp.followers) {
      this.followers().set(resp.followers, { parse: true })
    }

    if (resp.profile_pic_pid) {
      this.profilePic().set({public_id: resp.profile_pic_pid})
    }

    return resp;
  },

  profilePic: function () {
    if (!this._profilePic) {
      this._profilePic = new Snapt.Models.Photo(
        [], { author: this }
      );
    }

    return this._profilePic;
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

    return this._followees;
  },

  followers: function ()  {
    if (!this._followers) {
      this._followers = new Snapt.Collections.Users(
        [], { followee: this }
      )
    }

    return this._followers;
  },

  authorized: function () {
    return this.id == Snapt.currentUser.id
  },

  _isFollowing: function (user) {
    var result = false;
    Snapt.currentUser.followees().each(function (followee) {
      if (followee.id == user.id) {
        result = true;
      }
    }, this)

    return result;
  }
})
