Snapt.Views.Nav = Backbone.CompositeView.extend({
  template: JST['nav/nav'],

  events: {
    'click .sign-out-btn' : 'signOut',
  },

  initialize: function (options) {
    this.$el = options.$el
    this.listenTo(this.model, 'sync', this.render);
    var searchView = new Snapt.Views.UserSearch();
    this.addSubview('#search-box', searchView)
  },

  render: function () {
    var content = this.template();
    this.$el.html(content)
    this.attachSubviews();
    return this;
  },

  signOut: function () {
    $.ajax({
      url: "/session",
      type: "DELETE",
      success: function (widgetData) {
        console.log("Here are the fetched json parameters of the widget:");
        console.log(widgetData);
        window.location.href = ''
      }
    });
  },

});
