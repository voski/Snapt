Snapt.Models.User = Backbone.Model.extend({
  urlRoot: '/api/users',

  parse: function (payload) {
    if (payload.photos) {
      this.photos.set(payload.photos, { parse: true })
      delete payload.photos
    }

    return payload;
  },

  photos: function () {
    if (!this._photos) {
      this.photos = new Snapt.Collections.Photos([], author: this)
    }

    return this._photos
  },

})
