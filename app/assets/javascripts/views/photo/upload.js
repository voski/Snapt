Snapt.uploadWidget = function (options) {
  cloudinary.setCloudName('snapt');
  this.collection = options.collection;
  this.profilePic = options.profilePic

  var presets = {
    upload_preset: 'goImgGo', // default settings for uploads
    context: { caption: 'author_id', alt: Snapt.currentUser.id },
    tags: ["lol", "yay"],
    multiple: false,
    theme: 'minimal',
  };

  // toggle cropping off for mobile
  if (!Snapt.isMobile.any()) {
    presets.cropping = "server"
  }

  var uploadCallback = function (error, result) {
    if (error) {
      console.log('something went wrong')
    } else {
      _(result).each(function (photo) {
        var newPhoto = new Snapt.Models.Photo({
          public_id: photo.public_id,
        });

        // set crop data if there is any
        if (typeof photo.coordinates['custom'] !== "undefined") {
          newPhoto.set({coordinates: photo.coordinates['custom'][0]})
        }

        newPhoto.save({}, {
          success: function (model, response) {
            this.collection.add(newPhoto, { merge: true, new: true });
          }.bind(this)
        })
      }.bind(this))
    }
  };

  var profilePicCallback = function (error, result) {
    if (error) {
      console.log('something went wrong')
    } else {
      _(result).each(function (photo) {
          Snapt.currentUser.save({profile_pic_pid: photo.public_id});
      })
    }
  };

  if (!this.profilePic) {
    this.widget = cloudinary.createUploadWidget(
      presets, uploadCallback.bind(this)
    );
  } else {
    this.widget = cloudinary.createUploadWidget(
      presets, profilePicCallback.bind(this)
    )
  }

  this.open = function () {
    this.widget.open();
  }
};
