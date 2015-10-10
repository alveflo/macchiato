var jade = require('gulp-jade'),
    gulp = require('gulp'),
    shortid = require('shortid');

module.exports = {
  build: function() {
    return gulp.src(
        [
          'client/templates/*.jade',
          'client/templates/views/**/*.jade'
        ], {
          base: 'client/templates'
        })
        .pipe(jade({
          pretty: true,
          locals: {
            version: 'dev'
          }
        }))
        .pipe(gulp.dest('build'));
  },
  dist: function() {
    return gulp.src(
        [
          'client/templates/*.jade',
          'client/templates/views/**/*.jade'
        ], {
          base: 'client/templates'
        })
        .pipe(jade({
          pretty: false,
          locals: {
            version: shortid.generate()
          }
        }))
        .pipe(gulp.dest('dist'));
  }
}
