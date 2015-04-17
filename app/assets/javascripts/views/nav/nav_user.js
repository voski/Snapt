Snapt.Views.NavUser = Backbone.CompositeView.extend({
  template: JST['nav/nav_user'],
  tagName: 'li',
  className: 'navbar-text user-thumb',
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render)
  },

  events: {
    "click": 'handleClick',
    'click .sign-out-btn' : 'signOut',
  },

  handleClick: function () {
    this.$('.dropdown').toggleClass('open')
  },

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    return this
  },

  signOut: function () {
    $.ajax({
      url: "/session",
      type: "DELETE",
      success: function (resp) {
        window.location.href = ''
      }
    });
  },
});
