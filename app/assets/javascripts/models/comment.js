Snapt.Models.Comment = Backbone.Model.extend({
  urlRoot: '/api/comments',

  parse: function (resp) {
    if (resp.author) {
      this.author = new Snapt.Models.User(resp.author)
      delete resp.author
    }

    return resp;
  },



});
