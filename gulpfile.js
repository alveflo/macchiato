var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    combiner = require('stream-combiner2');

// Tasks
var cleantask = require('./tasks/clean'),
    jstask = require('./tasks/jstask'),
    stylustask = require('./tasks/stylustask'),
    jadetask = require('./tasks/jadetask'),
    copytask = require('./tasks/copy');

// Build tasks, copies to build/ non uglified and compressed
gulp.task('build-jade',       jadetask);
gulp.task('build-stylus',     stylustask);
gulp.task('build-js',         jstask);
gulp.task('build-images',     copytask.images);
gulp.task('build-bower',      copytask.bower);
gulp.task('build-semanticui', copytask.semantic);
gulp.task('clean',      cleantask);

gulp.task('build', ['clean', 'build-jade', 'build-stylus', 'build-js', 'build-images', 'build-bower', 'build-semanticui']);

gulp.task('default', ['build', 'serve']);

gulp.task('serve', function() {
  browserSync.init({
    server: './build',
    online: false
  });
  // Watch for changes on jade, stylus and js-files and build when needed
  gulp.watch('client/templates/**/*.jade', ['build-jade']);
  gulp.watch('client/style/**/*.styl', ['build-stylus']);
  gulp.watch('client/js/**/*.js', ['build-js']);
  // Watch for changes on html, css and js files and reload browser when needed
  gulp.watch('build/**/*.html').on('change', browserSync.reload);
  gulp.watch('build/style/**/*.css').on('change', browserSync.reload);
  gulp.watch('build/js/**/*.js').on('change', browserSync.reload);
});
