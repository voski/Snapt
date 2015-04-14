Snapt.Views.Feed = Backbone.CompositeView.extend({
  className: 'container user-show jumbotron',

  template: JST["feed/feed"],

  initialize: function () {
    this.listenTo(this.collection, 'add', this.addPhotoView);
    this.listenTo(this.collection, 'remove', this.removePhotoView)
    this.collection.each(function (photo) {
      this.addPhotoView(photo);
    }, this);
  },

  render: function () {
    var content = this.template({});
    this.$el.html(content);
    this.attachSubviews();

    return this;
  },

  addPhotoView: function (photo) {
    var subView = new Snapt.Views.PhotoShow({ model: photo })
    this.addSubview('.feed-photos', subView)
  },

  removePhotoView: function (photo) {
    _(this.subviews('.feed-photos')).each(function (subview) {
      if(subview.model == photo) {
        this.removeSubview('.feed-photos', subview);
      }
    }.bind(this));
  },


})
