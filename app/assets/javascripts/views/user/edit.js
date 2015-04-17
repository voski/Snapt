Snapt.Views.EditUser = Backbone.CompositeView.extend({
  template: JST['user/edit'],

  className: 'container user-show jumbotron',

  render: function () {
    var content = this.template()
    this.$el.html(content);

    return this;
  }
});
