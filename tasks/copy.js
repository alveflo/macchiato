var gulp = require('gulp')
    mainBowerFiles = require('main-bower-files'),
    paths = require('./paths');

module.exports = {
  images: function() {
      return gulp.src(paths.client.img)
          .pipe(gulp.dest(paths.build.public.img));
  },
  fonts: function() {
      return gulp.src(paths.client.fonts)
          .pipe(gulp.dest(paths.build.public.fonts));
  },
  bower: function() {
    return gulp.src(mainBowerFiles())
        .pipe(gulp.dest(paths.build.public.assets));
  },
  semantic: function() {
    return gulp.src(paths.client.semantic)
        .pipe(gulp.dest(paths.build.public.assets_semantic));
  }
};
