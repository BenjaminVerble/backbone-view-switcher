var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var putInto = require('../../index');

var Pie = Backbone.Model.extend({
  defaults: {
    kind: 'pecan'
  }
});

var Collection = Backbone.Collection.extend({
  model: Pie
});

var PieView = Backbone.View.extend({
  initialize: function () {
    this.collection.add({kind: 'honey', id: 1});
  },
  render: function () {
    var model = this.collection.get(1)
    this.$el.html('we like ' + model.get('kind') + ' pie!');
  }
});

var SimpleView = Backbone.View.extend({
  render: function () {
    this.$el.html('here is a view without a collection!!!');
  }
})


$(function () {

  var putIntoMain = putInto('#main');
  putIntoMain(PieView, Collection);

});