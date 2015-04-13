Snapt.Views.PhotoShow = Backbone.CompositeView.extend({

  template: JST['photo/show'],

  events: {
    'click .delete-photo': 'destroyPhoto'
  },

  tagName: 'li',

  className: 'list-group-item',

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
