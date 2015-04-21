Snapt.Views.PhotoTitle = Backbone.CompositeView.extend({
  template: JST['photo/title'],
  className: 'photo-title form-control',

  initialize: function (options) {
    // this.$el = options.$el,
    this.listenTo(this.model, 'sync', this.render)
  },

  events: {
    "click" : "startEdit"
  },

  startEdit: function () {
    console.log('clickidy click click')
  },

  render: function () {
    var content = this.template({ photo: this.model });
    this.$el.html(content);

    return this;
  },


});
