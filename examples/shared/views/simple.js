var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

module.exports = Backbone.View.extend({
  render: function () {
    this.$el.html('this view has no collection. so sad :-(');
  }
});