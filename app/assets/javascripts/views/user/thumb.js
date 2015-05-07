Snapt.Views.UserThumb = Backbone.CompositeView.extend({
  tagName: 'span',
  className: 'user-thumb label label-info',

  template: JST['user/thumb'],

  initialize: function () {
    this.model.fetch();
    this.listenTo(this.model, 'sync', this.render)
  },

  events: {
    'click': 'goToProfile'
  },

  goToProfile: function () {
    Backbone.history.navigate(
      'users/' + this.model.get('id'),
      {trigger: true}
    )
  },

  render: function () {

    var content = this.template({ user: this.model, photo: this.model.profilePic() })
    this.$el.html(content)
    return this;
  }

});
