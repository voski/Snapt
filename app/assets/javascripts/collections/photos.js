Snapt.Collections.Photos = Backbone.Collection.extend({
  model: Snapt.Models.Photo,

  initialize: function (models, options) {
    this.author = options.author;
  },

  comparator: "created_at",

  url: function () {
    return 'api/users/' + this.author.id + '/photos'
  },
});
