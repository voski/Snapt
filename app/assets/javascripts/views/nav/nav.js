Snapt.Views.Nav = Backbone.CompositeView.extend({
  template: JST['nav/nav'],


  initialize: function (options) {
    this.$el = options.$el
    // this.render();
  },
  render: function () {
    var content = this.template();
    this.$el.html(content)
    return this;
  }
});
