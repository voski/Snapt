Snapt.Views.PhotoShow = Backbone.CompositeView.extend({

  template: JST['photo/show'],
  spinner: JST['photo/spinner'],

  events: {
    'click .delete-photo': 'destroyPhoto'
  },

  tagName: 'li',

  initialize: function () {
    var spinner = new Spinner().spin();
    this.$el.html(this.spinner());
    this.el.appendChild(spinner.el);
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

  setSpinner: function () {

  }
});
