var concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    gulp = require('gulp');

module.exports = {
  build: function() {
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
          .pipe(gulp.dest(outPath));
    };
    buildAndConcat('client/js/*.js', 'makiato.js', 'build/js');
    return buildAndConcat('client/js/ng/**/*.js', 'ng-makiato.js', 'build/js');
  },
  dist: function() {
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
          .pipe(uglify()).on('error', function(e) {
            console.log('\x07', e.message);
            return this.end();
          })
          .pipe(gulp.dest(outPath));
    };
    buildAndConcat('client/js/*.js', 'makiato.js', 'dist/js');
    return buildAndConcat('client/js/ng/**/*.js', 'ng-makiato.js', 'dist/js');
  }
}
