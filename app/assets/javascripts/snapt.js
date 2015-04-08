window.Snapt = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Snapt.Routers.Router({ $el: $('#main') });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Snapt.initialize();
});
