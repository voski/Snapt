Snapt.Views.LikeIndex = Backbone.CompositeView.extend({
  template: JST['like/index'],

  initialize: function (options) {
    this.photo = options.photo;
    this.listenTo(this.photo, 'change:likes_count', this.updateCount)
    this.addBtn();
    this.addCounter();
  },

  render: function () {
    var content = this.template({photo: this.photo});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addBtn: function () {
    var subview = new Snapt.Views.LikeButton({ photo: this.photo });
    this.addSubview('div.like-btn', subview)
  },

  addCounter: function () {
    var subview = new Snapt.Views.LikeCounter({ photo: this.photo })
    this.addSubview('div.like-counter', subview)
  }

});
