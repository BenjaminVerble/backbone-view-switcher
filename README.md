backbone-view-switcher
======================

WORK IN PROGRESS

[![Build Status](https://travis-ci.org/BenjaminVerble/backbone-view-switcher.svg?branch=master)](https://travis-ci.org/BenjaminVerble/backbone-view-switcher)

places Backbone.js views into a container with an #id. can also attach a collection to an instantiated Backbone View

## Installation

- no need to do anything to use the module
- for tests (against browsers):
    + `npm install`
    + `npm test`
- for examples: `gulp`
- to remove bundle files created by browserify: `gulp clean`

## Usage

### two-step process with collection
key benefit is reuse of putIntoMain in a Backbone Router or elsewhere
```js
var putIntoMain = putInto('#main');
putIntoMain(PieView, Collection);
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