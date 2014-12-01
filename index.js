var warnMsgs = require('./lib/warn');
var errorMsgs = require('./lib/error');
var appendViewWithCollection = require('./lib/append-with-collection');
var appendViewWithoutCollection = require('./lib/append-without-collection');

module.exports = function (el, V, C){

  if (typeof el === 'string') {

    if (el.charAt(0) !== '#') {
      warnMsgs.notId();
    }

    // return a function with the el retained in the closure
    if (arguments.length === 1){
      return function (V, C){
        if (arguments.length >= 1){
          if (typeof V === 'function') {
            if (arguments.length === 2) {
              if (C === null) {
                appendViewWithoutCollection(el, V);
              } else if(typeof C === 'function'){
                appendViewWithCollection(el, V, C);
              } else {
                errorMsgs.badCollection();
              }
            } else {
              appendViewWithoutCollection(el, V);
            }
          } else {
            errorMsgs.badView();
          }
        }
      }
    }

    // run everything because we already have all the arguments
    if (arguments.length > 1) {
      if(typeof V === 'function'){
        if (arguments.length === 3) {
          if (C === null) {
            appendViewWithoutCollection(el, V);
          } else if (typeof C === 'function') {
            appendViewWithCollection(el, V, C);
          }  else {
            errorMsgs.badCollection()
          }
        } else {
          appendViewWithoutCollection(el, V);
        }
      } else{
        errorMsgs.badView();
      }
    }
  } else {
    errorMsgs.elNotString();
  }
};