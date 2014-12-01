var Backbone = require('backbone');
var IceCream = require('../models/ice-cream');

module.exports = Backbone.Collection.extend({
  model: IceCream
});