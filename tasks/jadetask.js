var jade = require('gulp-jade'),
    gulp = require('gulp'),
    shortid = require('shortid'),
    paths = require('./paths');

module.exports = function() {
//  var a =gulp.src('client/jade/views/**/*.jade', {
//        base: 'client/jade'
//      })
//      .pipe(jade({
//        pretty: false,
//        locals: {
//          version: shortid.generate()
//        }
//      }))
//      .pipe(gulp.dest('build/'));
  return gulp.src(paths.client.jade)
      .pipe(gulp.dest(paths.build + '/templates'));
};
