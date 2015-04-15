Snapt.Views.LikeIndex = Backbone.CompositeView.extend({
  template: JST['like/index'],

  initialize: function (options) {
    this.photo = options.photo
    this.addBtn();
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addBtn: function () {
    var subview = new Snapt.Views.LikeButton({ photo: this.photo });
    this.addSubview('div.like-btn', subview)
  },

});
