Snapt.Views.LikeButton = Backbone.View.extend({
  template: JST['like/button'],


  initialize: function (options) {
    this.photo = options.photo;
    // this.listenTo(this.photo.likes(), 'add remove', this.render)
  },

  events: {
    'click': 'handleClick'
  },

  handleClick: function () {
    this.isLikedByUser() ? this.destroyLike() : this.createLike()
  },

  render: function () {
    var content = this.template({ isLikedByUser: this.isLikedByUser() });
    this.$el.html(content);

    return this;
  },

  isLikedByUser: function () {
    var result = false;
    _(this.photo.likes().models).each( function (like) {
      if (like.liker.id === Snapt.currentUser.id) {
        result = true;
      }
    }, this);

    return result;
  },

  destroyLike: function () {
    var _like;
    _(this.photo.likes().models).each(function (like) {
      if (like.liker.id === Snapt.currentUser.id) {
        _like = like
      }
    }, this)

    _like.destroy({
      success: function () {
        this.photo.likes().remove(_like)
        this.$('span').removeClass('liked')
      }.bind(this)
    })
  },

  createLike: function () {
    var like = new Snapt.Models.Like({photo_id: this.photo.id})

    like.save([],{
      success: function (model, resp) {
        like.liker = Snapt.currentUser
        this.photo.likes().set(like, { parse: true })
        this.$('span').addClass('liked')
      }.bind(this)
    })
  },

});
