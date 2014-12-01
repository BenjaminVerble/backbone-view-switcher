
var errorMsgs = {};

errorMsgs.badView = function () {
  console.error('type of View is not a function, please pass a Backbone View');
}

errorMsgs.badCollection = function () {
  console.error('type of Collection is not a function, please pass a Backbone' +
                'Collection');
}

errorMsgs.noCollection = function () {
  console.error('please provide a collection or pass null as the third argument' +
                'to render your Backbone view without a collection');
}

errorMsgs.elNotString = function () {
  console.error('the first argument, el, must be a string');
}

module.exports = errorMsgs;