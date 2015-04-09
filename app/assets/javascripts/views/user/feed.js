Snapt.Views.UserFeed = Backbone.CompositeView.extend({

 template: JST["user/feed"],

 events: {
   'click #widget' : 'openWidget'
 },

 initialize: function () {
   this.collection = this.model.photos();
   this.listenTo(this.model, 'sync', this.render);
   this.listenTo(this.collection, 'add', this.addPhotoView);
   this.listenTo(this.collection, 'remove', this.removePhotoView);
   this.widget = new Snapt.uploadWidget(
     { collection: this.collection }
   );

   this.collection.each(function (photo) {
     this.addPhotoView(photo);
   }, this);
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

 render: function () {
   var content = this.template({ user: this.model });
   this.$el.html(content);
   this.attachSubviews();

   return this;
 },

 openWidget: function () {
   this.widget.open();
 }
})
