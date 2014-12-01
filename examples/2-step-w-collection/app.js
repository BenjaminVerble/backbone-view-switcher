var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var putInto = require('../../index');
var putIntoMain = putInto('#main');

var PieView = require('../shared/views/pie');
var PieCollection = require('../shared/collections/pie');

var IceCreamView = require('../shared/views/ice-cream');
var IceCreamCollection = require('../shared/collections/ice-cream');

var Router = Backbone.Router.extend({

  routes: {
    "": "pie",
    "ice-cream": "iceCream"
  },

  pie: function () {
    putIntoMain(PieView, PieCollection);
  },

  iceCream: function () {
    putIntoMain(IceCreamView, IceCreamCollection);
  }

});

$(function () {
  var router = new Router();
  Backbone.history.start();
});