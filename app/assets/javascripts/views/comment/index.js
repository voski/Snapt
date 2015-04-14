Snapt.Views.CommentIndex = Backbone.CompositeView.extend({
  template: JST['comment/index'],
  initialize: function (options) {
    this.photo = options.photo,
    this.collection = options.photo.comments();
    this.listenTo(this.collection, 'add', this.addCommentView);
    this.listenTo(this.collection, 'remove', this.removeCommentView);
    this.collection.each(function (comment) {
      this.addCommentView(comment);
    }, this)
  },

  events: {
    'submit ': 'addComment'
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();

    return this;
  },

  addComment: function (e) {
    e.preventDefault();
    var $input = $(e.target).find('input');
    var content = $input.val();

    var comment = new Snapt.Models.Comment({
      content: content,
      author_id: Snapt.currentUser.id,
      photo_id: this.photo.id
    });

    comment.save([], {
      success: function () {
        this.collection.add(comment, {merge: true})
        $input.val('')
      }.bind(this)
    })
  },


  addCommentView: function (comment) {
    var subview = new Snapt.Views.commentShow({ model: comment });
    this.addSubview('ul.comments', subview)
  },

  removeCommentView: function (comment) {
    _(this.subviews('ul.comments')).each(function (subview) {
      if(subview.model == comment) {
        this.removeSubview('ul.comments', subview);
      }
    }, this);
  },


});
