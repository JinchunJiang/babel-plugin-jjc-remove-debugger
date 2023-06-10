const { declare } = require('@babel/helper-plugin-utils');
const defaultOptions = {
  debugger: true,
};

const visitor = {
  DebuggerStatement(path, state) {
    const opts = state.opts;
    if (typeof opts.debugger === 'undefined') {
      opts.debugger = defaultOptions.debugger;
    }
    if (opts.debugger) {
      path.remove();
    }
  },
};

module.exports = declare(function () {
  return {
    visitor,
  };
});
