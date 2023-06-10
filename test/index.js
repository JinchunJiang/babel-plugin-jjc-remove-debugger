const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');
const noDebuggerPlugin = require('../index');

const code = fs.readFileSync(path.resolve(__dirname, './code.js'), 'utf8');

const result = babel.transformSync(code, {
  plugins: [
    [
      noDebuggerPlugin,
      {
        debugger: true,
      },
    ],
  ],
});

console.log(result.code);
