var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var putInto = require('../index');

module.exports = function () {
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

  });
}