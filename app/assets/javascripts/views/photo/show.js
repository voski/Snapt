Snapt.Views.PhotoShow = Backbone.CompositeView.extend({

  template: JST['photo/show'],

  events: {
    'click .delete-photo': 'destroyPhoto',
  },

  tagName: 'li',

  className: 'list-group-item',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.addTitle();
    this.addCommentIndex();

  },

  addTitle: function () {
    var subview = new Snapt.Views.PhotoTitle({ model: this.model })
    this.addSubview('div.title', subview);
  },

  addCommentIndex: function () {
    var subview = new Snapt.Views.CommentIndex({ photo: this.model })
    this.addSubview('ul.comments', subview)

  },

  render: function () {
    var content = this.template({ photo: this.model });
    this.$el.html(content);
    this.attachSubviews();

    return this;
  },

  destroyPhoto: function (e) {
    e.preventDefault();
    this.model.destroy();
  },

});
