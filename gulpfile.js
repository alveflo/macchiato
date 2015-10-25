var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    combiner = require('stream-combiner2');

// Tasks
var cleantask = require('./tasks/clean'),
    jstask = require('./tasks/jstask'),
    stylustask = require('./tasks/stylustask'),
    jadetask = require('./tasks/jadetask'),
    copytask = require('./tasks/copy'),
    paths = require('./tasks/paths');


// Build tasks, copies to build/ non uglified and compressed
gulp.task('build-jade',       jadetask);
gulp.task('build-stylus',     stylustask);
gulp.task('build-js',         jstask);
gulp.task('build-images',     copytask.images);
gulp.task('build-fonts',      copytask.fonts);
gulp.task('build-bower',      copytask.bower);
gulp.task('build-vendors',    copytask.vendors);
gulp.task('clean',            cleantask);
gulp.task('build', ['clean', 'build-jade', 'build-stylus', 'build-js', 'build-images', 'build-fonts', 'build-bower', 'build-vendors']);

gulp.task('default', ['build', 'serve']);

gulp.task('serve', function() {
  browserSync.init(null, {
    proxy: 'http://localhost:3000',
    port: 7000,
    online: false
  });
  // Watch for changes on jade, stylus and js-files and build when needed
  gulp.watch(paths.client.views, ['build-jade']);
  gulp.watch(paths.client.style, ['build-stylus']);
  gulp.watch([paths.client.js, paths.client.jsng], ['build-js']);
  // Watch for changes on html, css and js files and reload browser when needed
  gulp.watch('app/**/*').on('change', browserSync.reload);
});
