Snapt.Views.PhotoFooter = Backbone.CompositeView.extend({
  template: JST['photo/footer'],

  initialize: function (options) {
    this.listenTo(this.model, 'change:likes_count', this.updateCount)
    this.addBtn();
    this.addCounter();
  },

  render: function () {
    var content = this.template({photo: this.model});
    this.$el.html(content);
    this.attachSubviews();
    this.addTitle();
    return this;
  },

  addBtn: function () {
    var subview = new Snapt.Views.LikeButton({ model: this.model });
    this.addSubview('div.like-btn', subview)
  },

  addCounter: function () {
    var subview = new Snapt.Views.LikeCounter({ model: this.model })
    this.addSubview('div.like-counter', subview)
  },

  addTitle: function () {
    var subview = new Snapt.Views.PhotoTitle({ model: this.model, $el: this.$('div.photo-title-hook') })
    this.addSubview('div.photo-title-hook', subview);
  },

});
