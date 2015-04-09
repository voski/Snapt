Snapt.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$el = options.$el;
    this.$el.html('go router go');
  },

  routes : {
    'f' : 'showFeed'
  },

  showFeed : function () {
    Snapt.currentUser.fetch({
      success: function () {
        Snapt.currentUser.photos().fetch();
      }
    });
    var view = new Snapt.Views.UserFeed(
      { model: Snapt.currentUser }
    );
    this._swapView(view);
  },

  _swapView: function (view) {
    if (this._currentView) {
      this._currentView.remove()
    }

    this._currentView = view;
    this.$el.html(view.render().$el);
  },

})
