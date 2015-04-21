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
  },

  startEdit: function () {
    if (!this._editing) {
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
