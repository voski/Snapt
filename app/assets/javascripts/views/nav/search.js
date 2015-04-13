Snapt.Views.UserSearch = Backbone.CompositeView.extend({
  template: JST["nav/search"],

  events: {
    'input .user-search' : 'handleInput',
    'click a' : 'clearInput',
    'submit ' : 'search'

  },

  initialize: function (options) {
    // this.collection = options.collection;
    // this.$el = options.$el;
  },

  search: function (e) {
    e.preventDefault();
    var $el = $(e.currentTarget);
    var target = $el.find('.search-results li:first-child a');
    Backbone.history.navigate(target.attr('href'), { trigger: true });
    this.render();
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.$dropdown = this.$('div.dropdown');
    this.$results = this.$('.search-results')
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
    this.$results.empty();
    this.render();
  },

  renderResults: function (response) {
    var $results = this.$results;
    $results.empty();
    
    if (response.length === 0) {
      this.$dropdown.removeClass('open')
    } else {
      this.$dropdown.addClass('open')
      _(response).each(function (user) {
        var $content = $('<li>')
        var $link = $('<a>')
        $link.attr('href', '#users/' + user.id)
        $link.html(user.username)
        $content.html($link)
        $results.append($content)
      })
    }
  },


})
