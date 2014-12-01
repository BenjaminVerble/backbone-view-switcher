var warnMsgs = {};

warnMsgs.notId = function () {
  console.warn('be sure to use an ID selector as the first argument, or this module' +
               'probably won\'t work');
}

module.exports = warnMsgs;
