var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

module.exports = Backbone.View.extend({
  initialize: function () {
    this.collection.add({kind: 'honey', id: 1});
  },
  render: function () {
    var model = this.collection.get(1)
    this.$el.html('we like ' + model.get('kind') + ' pie!');
  }
});
