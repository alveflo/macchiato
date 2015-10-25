var jade = require('gulp-jade'),
    gulp = require('gulp'),
    paths = require('./paths');
    shortid = require('shortid');
module.exports = function() {
  return gulp.src(paths.client.views)
      .pipe(jade({
        pretty: true,
        locals: {
          version: shortid.generate()
        }
      }))
      .pipe(gulp.dest(paths.build.views));
};
