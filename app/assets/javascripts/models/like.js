Snapt.Models.Like = Backbone.Model.extend({
  urlRoot: '/api/likes',

  parse: function (resp) {
    if (resp.liker) {
      this.liker = resp.liker
      delete resp.liker
    }
    return resp
  },
});
