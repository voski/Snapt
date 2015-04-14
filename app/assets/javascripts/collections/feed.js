Snapt.Collections.Feed = Backbone.Collection.extend({
  url: "/api/feeds",
  model: Snapt.Models.Photo,
});

Snapt.Collections.feed = new Snapt.Collections.Feed
