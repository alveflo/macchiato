var del = require('del'),
    paths = require('./paths');

module.exports = function() {
  return del.sync(paths.build);
};
