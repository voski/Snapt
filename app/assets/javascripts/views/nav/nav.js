Snapt.Views.Nav = Backbone.CompositeView.extend({
  template: JST['nav/nav'],

  events: {
    'click .sign-out-btn' : 'signOut',
    'input .user-search' : 'handleInput',
    'click .search-results > a' : 'clearInput'
  },

  clearInput: function (e) {
    console.log(e.currentTarget)
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

  initialize: function (options) {
    this.$el = options.$el
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content)
    return this;
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

  signOut: function () {
    $.ajax({
      url: "/session",
      type: "DELETE",
      success: function (widgetData) {
        console.log("Here are the fetched json parameters of the widget:");
        console.log(widgetData);
        window.location.href = ''
      }
    });
  },

});
