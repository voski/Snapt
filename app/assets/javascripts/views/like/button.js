Snapt.Views.LikeButton = Backbone.View.extend({
  template: JST['like/button'],


  initialize: function (options) {
    this.photo = options.photo;
  },

  events: {
    'click': 'handleClick'
  },

  handleClick: function () {
    var like = new Snapt.Models.Like({photo_id: this.photo.id})
    like.save([],{
      success: function (model, resp) {
        console.log(model)
      }
    })
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);

    return this;
  }

});
