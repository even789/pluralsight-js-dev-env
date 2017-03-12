// this file isn't transpiles, so must user CommonJS and ES5

// Register babel to transpile before out tests run
require('babel-register')();

// disable webpack features that Mocha doesn't understand
require.extensions['.css'] = function() {};
