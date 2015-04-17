Snapt.Views.Feed = Backbone.CompositeView.extend({
  className: 'container user-show jumbotron',

  template: JST["feed/feed"],

  initialize: function () {
    this.listenTo(this.collection, 'add', this.render)
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
    this.addSubviewInOrder('.feed-photos', subView)
  },

  removePhotoView: function (photo) {
    var removeThis;
    _(this.subviews('.feed-photos')).each(function (subview) {
      if(subview.model == photo) {
        removeThis = subview
      }
    }.bind(this));

    this.removeSubview('.feed-photos', removeThis);
  },


})
