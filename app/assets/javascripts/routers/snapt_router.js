Snapt.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$el = options.$el;
    this.$el.html('go router go');
  },

  routes : {
    'users/:id' : 'showUser'
  },

  showUser : function (id) {
    var user = new Snapt.Models.User.get({id: id}) // this is broken need to make a global collection of users
    debugger
    user.fetch({
      success: function () {
        user.photos().fetch();
      }
    });
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
