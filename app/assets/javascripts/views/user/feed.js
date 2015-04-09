Snapt.Views.UserFeed = Backbone.CompositeView.extend({

 template: JST["user/feed"],

 events: {
   'click #uploadz' : 'openWidget'
 },

 initialize: function () {
   this.collection = this.model.photos();
   this.listenTo(this.model, 'sync', this.render);
   this.listenTo(this.collection, 'add', this.render);
   this.widgetView = new Snapt.Views.Upload({collection: this.collection});
 },

 render: function () {
   var content = this.template({ user: this.model });
   this.$el.html(content);
   var $feedPhotos = this.$('.feed-photos');

   this.collection.each(function (photo) {
     var view = new Snapt.Views.PhotoShow({ model: photo })
     $feedPhotos.prepend(view.render().$el)
   });

   return this;
 },

 openWidget: function () {
   this.widgetView.widget.open();
 }

})
