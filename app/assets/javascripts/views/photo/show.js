Snapt.Views.PhotoShow = Backbone.CompositeView.extend({

  template: JST['photo/show'],

  events: {
    'click .delete-photo': 'destroyPhoto',
    'submit ': 'addComment'
  },

  tagName: 'li',

  className: 'list-group-item',

  initialize: function () {
    this.collection = this.model.comments();
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addCommentView);
    this.listenTo(this.collection, 'remove', this.removeCommentView);
    this.collection.each(function (comment) {
      this.addCommentView(comment);
    }, this)
  },

  addCommentView: function (comment) {
    var subview = new Snapt.Views.commentShow({ model: comment });
    this.addSubview('.photo-comments', subview)
  },

  removeCommentView: function (comment) {
    _(this.subviews('.photo-comments')).each(function (subview) {
      if(subview.model == comment) {
        this.removeSubview('.photo-comments', subview);
      }
    }, this);
  },

  addComment: function (e) {
    e.preventDefault();
    var $input = $(e.target).find('input');
    var content = $input.val();

    var comment = new Snapt.Models.Comment({
      content: content,
      author_id: Snapt.currentUser.id,
      photo_id: this.model.id
    });

    comment.save([], {
      success: function () {
        this.collection.add(comment, {merge: true})
        $input.val('')
      }.bind(this)
    })
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
