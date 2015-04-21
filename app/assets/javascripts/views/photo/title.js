Snapt.Views.PhotoTitle = Backbone.CompositeView.extend({
  template: function () {
    return this._editing ? JST['photo/edit_title'] : JST['photo/title'];
  },

  className: 'photo-title form-control',

  initialize: function (options) {
    this.listenTo(this.model, 'sync', this.render)
  },

  events: {
    "click" : "startEdit",
    'mouseover' : 'handleCursor'
  },

  handleCursor: function () {
    if (!this.model.isAuthor()) {
      this.$el.css('cursor', 'default')
    }
  },

  startEdit: function () {
    if (!this._editing && this.model.isAuthor()) {
      this._editing = true;
      this.render();
      this.$('.title-edit').focus();
    }
  },

  render: function () {
    var content = this.template()({ photo: this.model });
    this.$el.html(content);

    return this;
  },


});
