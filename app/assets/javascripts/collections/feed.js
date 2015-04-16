Snapt.Collections.Feed = Backbone.Collection.extend({
  url: "/api/feeds",
  model: Snapt.Models.Photo,
  comparator: "time_ago",
});

Snapt.Collections.feed = new Snapt.Collections.Feed;
