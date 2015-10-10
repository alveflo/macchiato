var del = require('del');

module.exports =  {
  build: function() {
    return del.sync('build/');
  },
  dist: function() {
    return del.sync('dist/');
  }
};
