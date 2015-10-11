var express = require('express');
var router = express.Router();

router.get('/signup', function(req, res, next) {
  res.render('authforms/signup', {
    version: GLOBAL.makiatoVersion
  })
});

router.get('/login', function(req, res, next) {
  res.render('authforms/login', {
    version: GLOBAL.makiatoVersion
  })
});

router.get('/', function(req, res, next) {
  res.render('auth', {
    version: GLOBAL.makiatoVersion
  })
});

module.exports = router;
