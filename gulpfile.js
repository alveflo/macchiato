var gulp = require('gulp'),
    jade = require('gulp-jade'),
    babel = require('gulp-babel'),
    stylus = require('gulp-stylus'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    browserSync = require('browser-sync').create(),
    mainBowerFiles = require('main-bower-files'),
    del = require('del'),
    shortid = require('shortid'),
    combiner = require('stream-combiner2');

gulp.task('build-jade', function() {
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
  var buildAndConcat = function(path, filename, outPath) {
    gulp.src(path)
        .pipe(jshint({
          'globals': {
            "$": false,
            "angular": false,
            "Firebase": false
          }
        }))
        .pipe(jshint.reporter('default'))
        .pipe(concat(filename))
        /*.pipe(uglify()).on('error', function(e) {
          console.log('\x07', e.message);
          return this.end();
        })*/
        .pipe(gulp.dest(outPath));
  };
  buildAndConcat('client/js/*.js', 'makiato.js', 'build/js');
  return buildAndConcat('client/js/ng/**/*.js', 'ng-makiato.js', 'build/js');
});

gulp.task('copy-images', function() {
  return gulp.src('client/img/**/*.png')
      .pipe(gulp.dest('build/img'));
});

gulp.task('copy-bower-components', function() {
  return gulp.src(mainBowerFiles())
      .pipe(gulp.dest('build/assets'));
});

gulp.task('copy-semanticui', function() {
  return gulp.src('bower_components/semantic-ui/dist/**/*')
      .pipe(gulp.dest('build/assets/semanticui'));
});

gulp.task('clean', function() {
  return del.sync('build/');
});

gulp.task('default', ['clean', 'build-js', 'build-jade', 'build-stylus', 'copy-images', 'copy-bower-components', 'copy-semanticui']);

gulp.task('serve', ['build-js', 'build-jade', 'build-stylus', 'copy-images', 'copy-bower-components', 'copy-semanticui'], function() {
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
