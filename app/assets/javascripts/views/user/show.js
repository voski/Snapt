Snapt.Views.UserShow = Backbone.CompositeView.extend({
  className: 'container user-show jumbotron',

  template: JST["user/show"],

  events: {
    'click #widget' : 'openWidget',
    'click .follow' : 'follow',
    'click .unfollow' : 'unfollow'
  },

  initialize: function () {
    this.collection = this.model.photos();
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addPhotoView);
    this.listenTo(this.collection, 'remove', this.removePhotoView);
    this.collection.each(function (photo) {
     this.addPhotoView(photo);
    }, this);
  },



  follow: function (e) {
    $.ajax({
      url:"api/users/" + this.model.id + '/follow',
      dataType: 'json',
      method: 'POST',
      success: function (resp) {
        Snapt.currentUser.followees().add(this.model);
        this.render();
      }.bind(this)
    })
  },

  unfollow: function () {
    $.ajax({
      url:"api/users/" + this.model.id + '/follow',
      dataType: 'json',
      method: 'DELETE',
      success: function (resp) {
        Snapt.currentUser.followees().remove(this.model);
        this.render();
        Snapt.Collections.feed.fetch();
      }.bind(this)
    })
  },

  addPhotoView: function (photo) {
    var subview = new Snapt.Views.PhotoShow({ model: photo })
    this.addSubview('.feed-photos', subview)
  },

  removePhotoView: function (photo) {
    var viewToRemove;
    _(this.subviews('.feed-photos')).forEach(function (subview) {
      if(subview.model == photo) {
        viewToRemove = subview;
      }
    }, this);

    this.removeSubview('.feed-photos', viewToRemove);
  },

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    this.attachSubviews();

    return this;
  },

  addWidget: function () {
    if (this.model.id === Snapt.currentUser.id) {
      this.widget = new Snapt.uploadWidget(
       { collection: this.collection }
    )};
  },

  openWidget: function () {
    if (!this.widget) {
     this.addWidget();
    }
    this.widget.open();
  },
});
