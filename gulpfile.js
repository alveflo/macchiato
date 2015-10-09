var gulp = require('gulp'),
    jade = require('gulp-jade'),
    babel = require('gulp-babel'),
    stylus = require('gulp-stylus'),
    browserSync = require('browser-sync').create(),
    mainBowerFiles = require('main-bower-files'),
    del = require('del'),
    shortid = require('shortid');

gulp.task('build-jade', function() {
  return gulp.src('client/templates/*.jade')
      .pipe(jade({
        pretty: true,
        locals: {
          version: shortid.generate()
        }
      }))
      .pipe(gulp.dest('build'));
});

gulp.task('build-stylus', function() {
  return gulp.src('client/style/**/*.styl')
      .pipe(stylus({
        compress: false
      }))
      .pipe(gulp.dest('build/style'));
});

gulp.task('build-js', function() {
  return gulp.src('client/js/**/*.js')
      .pipe(gulp.dest('build/js'));
});

gulp.task('copy-images', function() {
  return gulp.src('client/img/**/*.png')
      .pipe(gulp.dest('build/img'));
});

gulp.task('copy-bower-components', function() {
  return gulp.src(mainBowerFiles())
      .pipe(gulp.dest('build/assets'));
});

gulp.task('copy-assets', function() {
  return gulp.src('client/assets/**/*')
      .pipe(gulp.dest('build/assets'));
});

gulp.task('clean', function() {
  return del('build/');
});

gulp.task('serve', ['build-js', 'build-jade', 'build-stylus', 'copy-images', 'copy-bower-components', 'copy-assets'], function() {
  browserSync.init({
    server: './build',
    online: false
  });

  gulp.watch('client/templates/**/*.jade', ['build-jade']);
  gulp.watch('client/style/**/*.styl', ['build-stylus']);
  gulp.watch('client/js/**/*.js', ['build-js']);

  gulp.watch('build/**/*.html').on('change', browserSync.reload);
  gulp.watch('build/style/**/*.css').on('change', browserSync.reload);
  gulp.watch('build/js/**/*.js').on('change', browserSync.reload);
});
