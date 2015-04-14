Snapt.Views.commentShow = Backbone.CompositeView.extend({
  template: JST['comment/show'],
  tagName: 'li',
  className: 'list-group-item',


  render: function () {
    var content = this.template({ comment: this.model });
    this.$el.html(content);

    return this;
  },

});
