Snapt.Views.PhotoShow = Backbone.CompositeView.extend({

  template: JST['photo/show'],

  events: {
    'click .delete-photo': 'destroyPhoto',
  },

  tagName: 'li',

  className: 'list-group-item constrain-width',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.addCommentIndex();
    this.addPhotoFooter();
    this.addAuthorInfo();
  },

  addAuthorInfo: function () {
    var subview = new Snapt.Views.UserThumb({ model: this.model.author() })
    this.addSubview('div.author-info', subview)
  },


  addPhotoFooter: function () {
    var subview = new Snapt.Views.PhotoFooter({ model: this.model })
    this.addSubview('div.likes', subview)
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
