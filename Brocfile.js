var md = require('broccoli-md');

module.exports = md('src', {
  srcDir: '/',
  destDir: 'html'
});

