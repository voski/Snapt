Snapt.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$el = options.$el;
  },

  routes : {
    'users/:id' : 'showUser'
  },

  showUser : function (id) {
    Snapt.Collections.users.fetch()

    var user = Snapt.Collections.users.getOrFetch(id);
    var view = new Snapt.Views.UserShow(
      { model: user }
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
