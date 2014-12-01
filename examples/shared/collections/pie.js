var Backbone = require('backbone');
var Pie = require('../models/pie');

module.exports = Backbone.Collection.extend({
  model: Pie
});