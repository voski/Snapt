window.Snapt = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Snapt.Routers.router({ $rootEl: $('#main') });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Snapt.initialize();
});
