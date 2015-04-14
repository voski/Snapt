window.Snapt = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {

    new Snapt.Routers.Router({ $el: $('#main') });

    new Snapt.Views.Nav({
      $el: $('#header'),
      model: Snapt.currentUser
    }).render();

    new Snapt.Views.PhotoTitleModal({
      $el: $('#photo-title-modal'),
    }).render();

    Backbone.history.start();
  }
};
