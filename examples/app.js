var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var putInto = require('./index');

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

  // two-step process with collection
  // key benefit is reuse of putIntoMain in a Backbone Router or elsewhere
  //var putIntoMain = putInto('#main');
  //putIntoMain(PieView, Collection);
  
  // one-step process with collection
  // putInto('#main', PieView, Collection);

  // two-step process without collection
  //var putIntoMain = putInto('#main');
  //putIntoMain(SimpleView);

  // one-step process without collection
  //putInto('#main', SimpleView);

  //two step process with null passed as collection
  // var putIntoMain = putInto('#main');
  // putIntoMain(SimpleView, null);

  //one-step process with null passed as a collection
  //putInto('#main', SimpleView, null);

});