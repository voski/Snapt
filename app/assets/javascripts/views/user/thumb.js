Snapt.Views.UserThumb = Backbone.CompositeView.extend({
  tagName: 'span',
  className: 'user-thumb label label-info',

  template: JST['user/thumb'],

  render: function () {
    var content = this.template({ user: this.model })
    this.$el.html(content)

    return this;
  }

});
