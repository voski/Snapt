Snapt.Views.UserSearch = Backbone.CompositeView.extend({
  template: JST["nav/search"],

  events: {
    'input .user-search' : 'handleInput',
    'click a' : 'clearInput'
  },

  initialize: function (options) {
    // this.collection = options.collection;
    // this.$el = options.$el;
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);

    return this;
  },

  handleInput: function (e) {
    var query = $(e.currentTarget).val()
    $.ajax({
      url: "/api/users/search",
      data: {
        query: query
      },
      dataType: 'json',
      success: function (response) {
        this.renderResults(response);
      }.bind(this)
    });
  },

  clearInput: function (e) {
    this.$('.user-search').val('');
    this.$('.search-results').empty();
  },

  renderResults: function (response) {
    var $results = this.$('.search-results');
    $results.empty();
    _(response).each(function (user) {
      var $content = $('<li>')
      var $link = $('<a>')
      $link.attr('href', '#users/' + user.id)
      $link.html(user.username)
      $content.html($link)
      $results.append($content)
    })
  },


})
