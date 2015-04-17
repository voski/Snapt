Snapt.Views.LikeCounter = Backbone.View.extend({
  template: JST['like/counter'],
  tagName: 'span',
  className: 'label label-snapt label-as-badge',

  initialize: function (options) {
    this.listenTo(this.model, 'change:likes_count', this.render)
  },

  render: function () {
    var content = this.template({ photo: this.model })
    this.$el.html(content)

    return this;
  },
});
