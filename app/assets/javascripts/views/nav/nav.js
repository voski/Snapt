Snapt.Views.Nav = Backbone.CompositeView.extend({
  template: JST['nav/nav'],
  events: {
    'click .sign-out-btn' : 'signOut',
  },

  initialize: function (options) {
    this.$el = options.$el
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(Snapt.router, 'route', this.setTab)
    var searchView = new Snapt.Views.UserSearch();
    this.addSubview('#search-box', searchView)
  },

  setTab: function (route, params) {
    if (Snapt.router.activeTab === "showFeed") {
      this.$('li.feed-link').addClass('active-tab');
      this.$('li.profile-link').removeClass('active-tab');

    } else if (Snapt.router.activeTab === "showUser") {
      this.$('li.profile-link').addClass('active-tab');
      this.$('li.feed-link').removeClass('active-tab')

    }
  },

  render: function () {
    var content = this.template();
    this.$el.html(content)
    this.attachSubviews();
    this.setTab()
    return this;
  },

  signOut: function () {
    $.ajax({
      url: "/session",
      type: "DELETE",
      success: function (resp) {
        window.location.href = ''
      }
    });
  },

});
