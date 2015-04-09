Snapt.Views.Upload = Backbone.CompositeView.extend({

  initialize: function (options) {
    cloudinary.setCloudName('snapt');

    if (options) {
      this.collection = options.collection
    }

    var that = this;
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

            var newPhoto = new Snapt.Models.Photo({
              url: photo.url,
              author_id: Snapt.currentUser.id
            })
            newPhoto.save([], {
              success: function () {
                that.collection.add(newPhoto, { merge: true });
                newPhoto.fetch();
                that.collection.fetch();
              }
            })
          })
        }
      }
    );
  },


});
