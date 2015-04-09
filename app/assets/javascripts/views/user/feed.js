Snapt.Views.UserFeed = Backbone.CompositeView.extend({

 template: JST["user/feed"],

 initialize: function () {
   this.listenTo(this.model, 'sync', this.render);
 },

 render: function () {
   var content = this.template({ user: this.model });
   this.$el.html(content);
   var $feedPhotos = this.$('.feed-photos');

   this.model.photos().each(function (photo) {
     var view = new Snapt.Views.PhotoShow({ model: photo })
     $feedPhotos.append(view.render().$el)
   });
   
   return this;
 }
})
