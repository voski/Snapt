Snapt.uploadWidget = function (options) {
  cloudinary.setCloudName('snapt');
  this.collection = options.collection;

  var presets = {
    upload_preset: 'goImgGo', // default settings for uploads
    context: {caption: 'author_id', alt: Snapt.currentUser.id},
    tags: ["lol", "yay"],
    multiple: false
  };

  var uploadCallback = function (error, result) {
    if (error) {
      console.log('something went wrong')
    } else { // returns array of uploaded photos
      _(result).each(function (photo) {
        var newPhoto = new Snapt.Models.Photo({
          url: photo.url,
          author_id: Snapt.currentUser.id,
          public_id: photo.public_id
        });

        newPhoto.save({}, {
          success: function () {
            this.collection.add(newPhoto, { merge: true });
          }.bind(this)
        })
      }.bind(this))
    }
  };

  this.widget = cloudinary.createUploadWidget(
    presets, uploadCallback.bind(this)
  ),
  this.open = function () {
    this.widget.open();
  }
};
