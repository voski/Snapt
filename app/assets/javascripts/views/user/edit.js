Snapt.Views.EditUser = Backbone.CompositeView.extend({
  template: JST['user/edit'],

  className: 'container user-show jumbotron',
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render)
    this.addProfilePic()
  },
  events: {
    'click #widget' : 'openWidget',
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

  addWidget: function () {
    if (this.model.id === Snapt.currentUser.id) {
      this.widget = new Snapt.uploadWidget(
       { profilePic: true }
    )};
  },

  openWidget: function () {
    if (!this.widget) {
     this.addWidget();
    }
    this.widget.open();
  },

});
