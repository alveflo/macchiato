var stylus = require('gulp-stylus'),
    gulp = require('gulp');

module.exports = {
  build: function() {
    return gulp.src('client/style/**/*.styl')
        .pipe(stylus({
          compress: false
        }))
        .pipe(gulp.dest('build/style'));
  },
  dist: function() {
    return gulp.src('client/style/**/*.styl')
        .pipe(stylus({
          compress: true
        }))
        .pipe(gulp.dest('dist/style'));
  }
};
