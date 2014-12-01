var runSetup = require('../test-setup/add-view-w-coll');

suite('Backbone View Switcher', function(){
  setup(function(){
    runSetup();
  });

  suite('putInto', function(){
    test('should insert a view', function(){
      var actual = $('#pie').html();
      var expected = 'we like honey pie!'
      assert.equal(actual, expected);
    });
  });
});

