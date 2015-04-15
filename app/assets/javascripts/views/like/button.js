Snapt.Views.LikeButton = Backbone.View.extend({
  template: JST['like/button'],
  
  events: {
    'click': 'handleClick'
  },

  handleClick: function () {
    alert('ouch')
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);

    return this;
  }

});
