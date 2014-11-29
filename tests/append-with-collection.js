var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var tape = require('tape');
var appendWithCollection = require('../append-with-collection');

document.appendChild = '<div id="main">If you see this, the module is not working</div>';

var Pie = Backbone.Model.extend({
  defaults: {
    kind: 'pecan'
  }
});

var Collection = Backbone.Collection.extend({
  model: Pie
});

var PieView = Backbone.View.extend({
  tagName: 'h1',
  id: 'pie',
  initialize: function () {
    this.collection.add({kind: 'honey', id: 1});
  },
  render: function () {
    var model = this.collection.get(1)
    this.$el.html('we like ' + model.get('kind') + ' pie!');
  }
});

appendWithCollection('#main', PieView, Collection);

test('appendWithCollection should add a view that has a collection', function (t) {
  var view = $('#pie');
  t.plan(2);
  t.ok(view, 'appendWithCollection should add a Backbone view');
  t.ok(view.collection, 'appendWithCollection should attach a collection' +
                        ' as a property of a Backbone View')
});