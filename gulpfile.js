var gulp = require('gulp'),
    jade = require('gulp-jade'),
    babel = require('gulp-babel'),
    browserSync = require('browser-sync').create();

gulp.task('build-jade', function() {
  return gulp.src('client/templates/*.jade')
      .pipe(jade({
        pretty: true
      }))
      .pipe(gulp.dest('build'));
});

gulp.task('build-css', function() {
  return gulp.src('client/style/*.css')
      .pipe(gulp.dest('build/style'));

});

gulp.task('build-js', function() {
  return gulp.src('client/js/*.js')
      .pipe(babel())
      .pipe(gulp.dest('build/js'));
});

gulp.task('default', function() {
  // Compile jade template files

});

gulp.task('serve', ['build-js', 'build-jade'], function() {
  browserSync.init({
    server: './dist'
  });

  gulp.watch('client/templates/*.jade', ['build-jade']);
  gulp.watch('client/style/*.css', ['build-css']);
  gulp.watch('client/js/*.js', ['build-js']);

  gulp.watch('build/*.html').on('change', browserSync.reload);
  gulp.watch('build/style/*.css').on('change', browserSync.reload);
  gulp.watch('build/js/*.js').on('change', browserSync.reload);
});
