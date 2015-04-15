Snapt.Views.LikeIndex = Backbone.CompositeView.extend({
  template: JST['like/index'],

  initialize: function () {

  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },


});
