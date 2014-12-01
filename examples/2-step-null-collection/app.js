var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var putInto = require('../../index');

var SimpleView = require('../shared/views/simple');

$(function () {

  var putIntoMain = putInto('#main');

  putIntoMain(SimpleView, null);

});