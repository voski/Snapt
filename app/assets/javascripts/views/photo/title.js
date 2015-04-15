Snapt.Views.PhotoTitle = Backbone.CompositeView.extend({
  template: JST['photo/title'],

  className: 'well',

  initialize: function (options){
  },

  render: function () {
    var content = this.template({ photo: this.model });
    this.$el.html(content);

    return this;
  },


});
