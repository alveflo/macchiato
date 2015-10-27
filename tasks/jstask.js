var concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    gulp = require('gulp'),
    paths = require('./paths');

module.exports = function() {
  var hintBackend = function() {
    gulp.src(paths.build.backendjs)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
  }

  var buildAndConcat = function(path, filename, outPath) {
    gulp.src(path)
        .pipe(jshint({
          'globals': {
            "$": false,
            "angular": false
          }
        }))
        .pipe(jshint.reporter('default'))
        .pipe(concat(filename))
      /*  .pipe(uglify()).on('error', function(e) {
          console.log('\x07', e.message);
          return this.end();
        })*/
        .pipe(gulp.dest(outPath));
  };
  hintBackend();
  buildAndConcat(paths.client.js, 'makiato.js', paths.build.public.js);
  return buildAndConcat(paths.client.jsng, 'ng-makiato.js', paths.build.public.js);
};
