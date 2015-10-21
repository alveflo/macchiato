module.exports = {
  'client': {
    'views':              'client/views/**/*.jade',
    'style':              'client/style/**/*.styl',
    'js':                 'client/js/*.js',
    'jsng':               'client/js/ng/**/*.js',
    'img':                'client/img/**/*.png',
    'fonts':              'client/font/**/*.ttf',
    'semantic':           'bower_components/semantic-ui/dist/**/*',
    'jstree':             'bower_components/jstree/dist/**/*',
    'ace':                'bower_components/ace-builds/src-noconflict/**/*.js'
  },
  'build': {
    'public': {
      'img':              'app/public/img',
      'fonts':            'app/public/font',
      'js':               'app/public/js',
      'assets':           'app/public/assets',
      'assets_semantic':  'app/public/assets/semanticui',
      'assets_jstree':    'app/public/assets/jstree',
      'assets_ace':       'app/public/assets/ace',
      'style':            'app/public/style',
    },
    'public_dir':         'app/public',
    'views':              'app/views'
  }
}
