Snapt.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$el = options.$el;
    this.listenTo(this, 'route', this.setActiveTab)
  },

  routes : {
    '': 'showFeed',
    'feed': 'showFeed',
    'users/:id' : 'showUser'
  },

  setActiveTab: function (resp) {
    this.activeTab = resp;
  },

  showUser: function (id) {
    var user = new Snapt.Models.User({ id: id });
    user.fetch();
    var view = new Snapt.Views.UserShow(
      { model: user }
    );
    this._swapView(view);
  },

  showFeed: function () {
    var feed =  new Snapt.Collections.Feed
    feed.fetch()

    var view = new Snapt.Views.Feed({
      collection: feed
    });
    this._swapView(view);
  },

  _swapView: function (view) {
    if (this._currentView) {
      this._currentView.remove()
    }

    this._currentView = view;
    this.$el.html(view.render().$el);
  },

});
