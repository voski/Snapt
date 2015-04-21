Snapt.Views.LikeButton = Backbone.View.extend({
  template: JST['like/button'],

  events: {
    'click': 'handleClick'
  },

  className: 'input-group-addon like-btn',

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
    _(this.model.likes().models).each( function (like) {
      if (like.liker.id === Snapt.currentUser.id) {
        result = true;
      }
    }, this);

    return result;
  },

  destroyLike: function () {
    var _like;
    _(this.model.likes().models).each(function (like) {
      if (like.liker.id === Snapt.currentUser.id) {
        _like = like
      }
    }, this)

    _like.destroy({
      success: function () {
        this.model.likes().remove(_like)
        this.$('span').removeClass('liked')
        this.model.set({
          likes_count: this.model.attributes.likes_count - 1
        })
      }.bind(this)
    })
  },

  createLike: function () {
    var like = new Snapt.Models.Like({photo_id: this.model.id})

    like.save([],{
      success: function (model, resp) {
        like.liker = Snapt.currentUser
        this.model.likes().set(like, { parse: true })
        this.model.set({
          likes_count: this.model.attributes.likes_count + 1
        })
        this.$('span').addClass('liked')
      }.bind(this)
    })
  },

});
