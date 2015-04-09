Snapt.Views.Upload = Backbone.CompositeView.extend({
  events: {
    'click #uploadz' : 'openWidget'
  },

  initialize: function (options) {
    cloudinary.setCloudName('snapt');

    if (options) {
      this.collection = options.collection
    }

    this.widget = cloudinary.createUploadWidget(
      {
        upload_preset: 'goImgGo', // default settings for uploads
        context: { author_id:1 }
      },
      function(error, result) { // callback
        if (error) {
          console.log('something went wrong')
        } else {
          _(result).each(function (photo) {
            console.log(photo)
          })
        }
      }
    );
  },

  openWidget: function () {
    this.widgetView.widget.open();
  }
});
