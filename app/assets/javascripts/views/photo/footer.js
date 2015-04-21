Snapt.Views.PhotoFooter = Backbone.CompositeView.extend({
  template: JST['photo/footer'],

  tagName: 'form',

  className: 'photo-footer',

  initialize: function (options) {
    this.listenTo(this.model, 'change:likes_count', this.updateCount)
  },

  render: function () {
    var content = this.template({photo: this.model});
    this.$el.html(content);
    this.addBtn();
    this.addTitle();
    this.addCounter();
    this.attachSubviews();
    return this;
  },

  addBtn: function () {
    var subview = new Snapt.Views.LikeButton({ model: this.model });
    this.addSubview('div.footer-hook', subview)
  },

  addCounter: function () {
    var subview = new Snapt.Views.LikeCounter({ model: this.model })
    this.addSubview('div.footer-hook', subview)
  },

  addTitle: function () {
    var subview = new Snapt.Views.PhotoTitle({ model: this.model, $el: this.$('div.photo-title-hook') })
    this.addSubview('div.footer-hook', subview);
  },

});
