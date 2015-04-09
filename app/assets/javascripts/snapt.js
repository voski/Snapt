window.Snapt = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Snapt.Routers.Router({ $el: $('#main') });
    new Snapt.Views.Nav({ $el: $('#header')}).render();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Snapt.initialize();
});
