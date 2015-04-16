Snapt.Models.Comment = Backbone.Model.extend({
  urlRoot: '/api/comments',

  parse: function (resp) {
    if (resp.author) {
      this.author().set(resp.author, { parse: true });
      delete resp.author
    }

    return resp;
  },

  author: function () {
    if (!this._author) {
      this._author = new Snapt.Models.User(
        [], { comment: this }
      )
    }

    return this._author
  }
});
