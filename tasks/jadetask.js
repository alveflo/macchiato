var jade = require('gulp-jade'),
    gulp = require('gulp'),
    paths = require('./paths');

module.exports = function() {
  return gulp.src(paths.client.views)
      .pipe(gulp.dest(paths.build.views));
};
