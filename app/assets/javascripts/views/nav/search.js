Snapt.Views.UserSearch = Backbone.CompositeView.extend({
  template: JST["nav/search"],

  // events: {}, // will listen for change in input

  initialize: function (options) {
    // this.collection = options.collection;
    // this.$el = options.$el;
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);

    return this;
  }

})
