var del = require('del'),
    paths = require('./paths');

module.exports = function() {
  del.sync(paths.build.public_dir);
  del.sync(paths.build.views);
};
