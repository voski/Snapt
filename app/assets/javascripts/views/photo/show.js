Snapt.Views.PhotoShow = Backbone.CompositeView.extend({
  template: JST['photo/show'],

  tagName: 'li',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {

    var content = this.template({ photo: this.model });
    this.$el.html(content);
    return this;
  },

});
