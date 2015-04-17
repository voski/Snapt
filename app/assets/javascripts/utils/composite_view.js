Backbone.CompositeView = Backbone.View.extend({
  addSubview: function (selector, subview) {
    this.subviews(selector).push(subview);
    this.attachSubview(selector, subview.render());
  },

  addSubviewInOrder: function (selector, subview, prepend) {
    prepend = prepend || false
    var selectorSubviews = this.subviews(selector);
    if (selectorSubviews.length === 0) {
      selectorSubviews.push(subview);
      this.attachSubview(selector, subview.render(), prepend);

    } else if (subview.model.get('created_at')) {
      var newDate = subview.model.get('created_at');
      var idx = _.findIndex(selectorSubviews, function (subview) {
        var otherDate = subview.model.get('created_at');
        return otherDate < newDate;
      })
      if (idx === -1) {
        selectorSubviews.push(subview);
      } else {
        selectorSubviews.splice(idx, 0, subview)
      }
      this.attachSubview(selector, subview.render(), prepend);
    }
  },

  attachSubview: function (selector, subview, prepend) {
    // TODO find correct element location to insert into dom
    if (prepend) {
      this.$(selector).prepend(subview.$el);
    } else {
      this.$(selector).append(subview.$el);
    }


    // Bind events in case `subview` has previously been removed from
    // DOM.
    subview.delegateEvents();

    if (subview.attachSubviews) {
      subview.attachSubviews();
    }
  },

  attachSubviews: function () {
    // I decided I didn't want a function that renders ALL the
    // subviews together. Instead, I think:
    //
    // * The user of CompositeView should explicitly render the
    //   subview themself when they build the subview object.
    // * The subview should listenTo relevant events and re-render
    //   itself.
    //
    // All that is necessary is "attaching" the subview `$el`s to the
    // relevant points in the parent CompositeView.

    var view = this;
    _(this.subviews()).each(function (selectorSubviews, selector) {
      view.$(selector).empty();
      _(selectorSubviews).each(function (subview) {
        view.attachSubview(selector, subview);
      });
    });
  },

  remove: function () {
    Backbone.View.prototype.remove.call(this);
    _(this.subviews()).each(function (subviews) {
      _(subviews).each(function (subview) {
        subview.remove();
      });
    });
  },

  removeSubview: function (selector, subview) {
    subview.remove();

    var subviews = this.subviews(selector);
    subviews.splice(subviews.indexOf(subview), 1);
  },

  subviews: function (selector) {
    // Map of selectors to subviews that live inside that selector.
    // Optionally pass a selector and I'll initialize/return an array
    // of subviews for the sel.
    this._subviews = this._subviews || {};

    if (selector) {
      this._subviews[selector] = this._subviews[selector] || [];
      return this._subviews[selector];
    } else {
      return this._subviews;
    }
  }
});
