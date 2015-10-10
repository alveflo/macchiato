var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    combiner = require('stream-combiner2');

// Tasks
var clean = require('./tasks/clean'),
    jstask = require('./tasks/jstask'),
    stylus = require('./tasks/stylustask'),
    jade = require('./tasks/jadetask'),
    copy = require('./tasks/copy');

// Build tasks, copies to build/ non uglified and compressed
gulp.task('build-jade',       jade.build);
gulp.task('build-stylus',     stylus.build);
gulp.task('build-js',         jstask.build);
gulp.task('build-images',     copy.images.build);
gulp.task('build-bower',      copy.bower.build);
gulp.task('build-semanticui', copy.semantic.build);
gulp.task('clean-build',      clean.build);

gulp.task('build', ['clean-build', 'build-jade', 'build-stylus', 'build-js', 'build-images', 'build-bower', 'build-semanticui']);

// Dist tasks, copies to dist/ uglified and compressed.
gulp.task('dist-jade',       jade.dist);
gulp.task('dist-stylus',     stylus.dist);
gulp.task('dist-js',         jstask.dist);
gulp.task('dist-images',     copy.images.dist);
gulp.task('dist-bower',      copy.bower.dist);
gulp.task('dist-semanticui', copy.semantic.dist);
gulp.task('clean-dist',      clean.dist);
gulp.task('dist', ['clean-dist', 'dist-jade', 'dist-stylus', 'dist-js', 'dist-images', 'dist-bower', 'dist-semanticui']);




gulp.task('default', ['clean-build', 'serve']);

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
