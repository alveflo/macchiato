module.exports = {
  'client': {
    'views':              'client/views/**/*.jade',
    'style':              'client/style/**/*.styl',
    'js':                 'client/js/*.js',
    'jsng':               'client/js/ng/**/*.js',
    'img':                'client/img/**/*.png',
    'semantic':           'bower_components/semantic-ui/dist/**/*'
  },
  'build': {
    'public': {
      'img':              'app/public/img',
      'js':               'app/public/js',
      'assets':           'app/public/assets',
      'assets_semantic':  'app/public/assets/semanticui',
      'style':            'app/public/style',
    },
    'public_dir':         'app/public',
    'views':              'app/views'
  }
}
