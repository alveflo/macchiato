var express = require('express');
var router = express.Router();

module.exports = function(passport) {
  router.post('/signup', passport.authenticate('signup', {
    successRedirect: '/login',
    failureRedirect: '/login#/signup',
    failureFlash: true
  }));

  router.post('/login', passport.authenticate('login', {
    successRedirect: '/dashboard',
    failureRedirect: '/login#/login',
    failureFlash: true
  }));


  router.get('/signup', function(req, res, next) {
    res.render('auth/authforms/signup', {
      version: GLOBAL.makiatoVersion,
      message: req.flash('message').toString()
    });
  });

  router.get('/login', function(req, res, next) {
      res.render('auth/authforms/login', {
        version: GLOBAL.makiatoVersion,
        message: req.flash('message').toString()
      });
  });

  router.get('/', function(req, res, next) {
    if (req.isAuthenticated()) {
      res.redirect('/dashboard');
    } else {
      res.render('auth/auth', {
        version: GLOBAL.makiatoVersion
      });
    }
  });

  router.get('/signout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  return router;
}
