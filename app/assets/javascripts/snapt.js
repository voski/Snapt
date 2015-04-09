window.Snapt = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Snapt.Routers.Router({ $el: $('#main') });
    Backbone.history.start();
    Snapt.users = new Snapt.Collections.Users();
  }
};

$(document).ready(function(){
  Snapt.initialize();
});
