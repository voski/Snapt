Snapt.Views.ProfilePic = Backbone.View.extend({
  template: JST['user/profile_pic'],
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({ photo: this.model.profilePic() });
    this.$el.html(content);
    return this;
  },
});
