var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var test = require('tape');
var putInto = require('../append-with-collection');

$(function () {

  $(document.body).html('<div id="main">If you see this, the module is not working</div>');

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

  putInto('#main', PieView, Collection);

  test('Backbone view switcher', function (t) {
    var actual = $('#pie').html();
    var expected = 'we like honey pie!'
    t.plan(1);
    t.equal(actual, expected, 'should add a view');
   });

});