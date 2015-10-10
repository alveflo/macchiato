var gulp = require('gulp')
    mainBowerFiles = require('main-bower-files'),


module.exports = {
  images: {
    build: function() {
      return gulp.src('client/img/**/*.png')
          .pipe(gulp.dest('build/img'));
    },
    dist: function() {
      return gulp.src('client/img/**/*.png')
          .pipe(gulp.dest('dist/img'));
    }
  },
  bower: {
    build: function() {
      return gulp.src(mainBowerFiles())
          .pipe(gulp.dest('build/assets'));
    },
    dist: function() {
      return gulp.src(mainBowerFiles())
          .pipe(gulp.dest('dist/assets'));
    }
  },
  semantic: {
    build: function() {
      return gulp.src('bower_components/semantic-ui/dist/**/*')
          .pipe(gulp.dest('build/assets/semanticui'));
    },
    dist: function() {
      return gulp.src('bower_components/semantic-ui/dist/**/*')
          .pipe(gulp.dest('dist/assets/semanticui'));
    }
  }
};
