Snapt.Views.Nav = Backbone.CompositeView.extend({
  template: JST['nav/nav'],

  initialize: function (options) {
    this.$el = options.$el
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(Snapt.router, 'route', this.setTab)
    var searchView = new Snapt.Views.UserSearch();
    var navUser = new Snapt.Views.NavUser({ model: this.model })
    this.addSubview('.navbar-right', searchView)
    this.addSubview('.navbar-right', navUser)
  },

  render: function () {
    var content = this.template();
    this.$el.html(content)
    this.attachSubviews();
    return this;
  },

});
