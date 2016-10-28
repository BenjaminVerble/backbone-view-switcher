backbone-view-switcher
======================

!! NO MAINTENANCE INTENDED !!

Backbone View Switcher places Backbone.js views into a container that has an #id. It can also attach a collection to a view when the view is instantiated by Backbone View Switcher. This module currently requires Browserify.

## Installation

- `npm install backbone-view-switcher --save`
- for tests:
    + cd to package root
    + `npm install`
    + `npm test`
- for examples: `gulp` (will browserify every app.js in each example)
    + cd to each example and open in a browser or serve. (harpjs is pretty nice for this. it will always serve an index.html file in a directory)
    + to remove bundle files created by browserify: `gulp clean`

## Usage

In general, the primary intention of this module is to help with code-repetition / boilerplate code in a Backbone.js router or parent view.

### Always start with this:
```js
var putInto = require('backbone-view-switcher'); // call it what you want :-)
```

### two-step process with collection (suggested use)
key benefit is reuse of putIntoMain in a Backbone Router or elsewhere
```js
// require some depencencies
var putIntoMain = putInto('#main');

var router = Backbone.Router.extend({

  routes: {
    "contact": "contact",
    "help": "help",
    "about": "about"
  },

  contact: function () {
    putIntoMain(ContactView, Collection);
  },

  about: function () {
    putIntoMain(AboutView, AnotherCollection);
  },

  help: function () {
    putIntoMain(HelpView, YetAnotherCollection)
  }

});
```

### one-step process with collection
```js
putInto('#main', PieView, Collection);
```

### two-step process without collection
```js
var putIntoMain = putInto('#main');
putIntoMain(SimpleView);
```

### one-step process without collection
```js
putInto('#main', SimpleView);
```

### two step process with null passed as collection
```js
var putIntoMain = putInto('#main');
putIntoMain(SimpleView, null);
```

### one-step process with null passed as a collection
```js
putInto('#main', SimpleView, null);
```
