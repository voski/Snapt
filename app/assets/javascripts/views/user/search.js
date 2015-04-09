Snapt.Views.UserSearch = Backbone.CompositeView.extend({
  template: JST["user/search"],

  events: {}, // will listen for change in input

  initialize: function (options) {
    this.collection = options.collection;
    this.$el = options.$el;
  },
  
})
