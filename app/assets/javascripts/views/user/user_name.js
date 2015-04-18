Snapt.Views.UserName = Backbone.View.extend({
  template: JST['user/user_name'],
  clasName: 'user-name',

  events: {
    'dblclick' : 'startEdit',
  },
  // TODO change button for widge to seperate view?
  startEdit: function () {
    console.log('start edit')
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render)
  },

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    return this;
  },

})
