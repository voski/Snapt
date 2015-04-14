Snapt.Views.PhotoShow = Backbone.CompositeView.extend({

  template: JST['photo/show'],

  events: {
    'click .delete-photo': 'destroyPhoto',
    'submit ': 'addComment'
  },

  tagName: 'li',

  className: 'list-group-item',

  addComment: function (e) {
    e.preventDefault();
    var $input = $(e.target).find('input');
    var content = $input.val();

    var comment = new Snapt.Models.Comment({
      content: content,
      author_id: Snapt.currentUser.id,
      photo_id: this.model.id
    });

    comment.save()
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({ photo: this.model });
    this.$el.html(content);

    return this;
  },

  destroyPhoto: function (e) {
    e.preventDefault();
    this.model.destroy();
  },

});
