var concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    gulp = require('gulp'),
    paths = require('./paths');

module.exports = function() {
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
  buildAndConcat(paths.client.js, 'makiato.js', paths.build + '/js');
  return buildAndConcat(paths.client.jsng, 'ng-makiato.js', paths.build +'/js');
};
