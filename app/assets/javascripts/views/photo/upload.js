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
        context: 'caption=author_id|alt=' + Snapt.currentUser.id,
        tags: ["lol", "yay"]
      },
      function(error, result) { // callback
        if (error) {
          console.log('something went wrong')
        } else {
          console.log(result)
          _(result).each(function (photo) {

            var newPhoto = new Snapt.Models.Photo({
              url: photo.url,
              author_id: Snapt.currentUser.id,
              public_id: photo.public_id
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
