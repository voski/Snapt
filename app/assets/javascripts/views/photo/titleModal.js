Snapt.Views.PhotoTitleModal = Backbone.View.extend({
  template: JST['photo/title_modal'],

  initialize: function (options) {
    this.$el = options.$el;
    this.listenTo(Backbone, 'addTitle', this.addTitle);
  },

  addTitle: function () {
    this.$modal = this.$('div.modal');
    this.$modal.modal('toggle')
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },
});
