Snapt.Views.EditUser = Backbone.CompositeView.extend({
  template: JST['user/edit'],

  className: 'container user-show jumbotron',
  initialize: function () {
    this.addProfilePic()
  },

  render: function () {
    var content = this.template()
    this.$el.html(content);
    this.attachSubviews()
    return this;
  },

  addProfilePic: function () {
    var view = new Snapt.Views.ProfilePic({ model: this.model })
    this.addSubview('div.edit-content', view)
  },

});
