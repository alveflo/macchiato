module.exports = {
  'client': {
    'jade':     'client/templates/**/*.jade',
    'stylus':   'client/style/**/*.styl',
    'js':       'client/js/*.js',
    'jsng':     'client/js/ng/**/*.js',
    'img': 'client/img/**/*.png',
    'semantic': 'bower_components/semantic-ui/dist/**/*'
  },
  'build': {
    'public': {
      'img': 'app/public/img',
      'js': 'app/public/js',
      'js_assets': 'app/public/js/assets',
      'js_assets_semantic': 'app/public/js/assets/semanticui',
      'style': 'app/public/style',
    },
    'public_dir': 'app/public',
    'views': 'app/views'
  }
}
