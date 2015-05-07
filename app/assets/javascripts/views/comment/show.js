Snapt.Views.commentShow = Backbone.CompositeView.extend({
  template: JST['comment/show'],
  tagName: 'li',
  className: 'list-group-item',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render)
  },

  render: function () {
    var content = this.template({ comment: this.model });
    this.$el.html(content);
    this.addUserThumb();
    


    return this;
  },

  addUserThumb: function () {
    var subview = new Snapt.Views.UserThumb({ model: this.model.author() })
    this.addSubview('div.user-thumb', subview)
  },

});
