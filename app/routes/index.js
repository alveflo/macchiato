var express = require('express');
var router = express.Router();



module.exports = function(passport) {

  router.get('/', function(req, res, next) {
    res.render('index', {
      version: GLOBAL.makiatoVersion
    });
  });


  router.get('/signup', function(req, res, next) {
    res.render('auth/signup', {
      version: GLOBAL.makiatoVersion,
      message: req.flash('message').toString()
    });
  });

  router.get('/login', function(req, res, next) {
    if (req.isAuthenticated()) {
      res.redirect('/dashboard');
    } else {
      res.render('auth/login', {
        version: GLOBAL.makiatoVersion,
        message: req.flash('message').toString()
      });
    }
  });

  router.get('/signout', function(req, res) {
    req.logout();
    res.redirect('/');
  });



  router.post('/signup', passport.authenticate('signup', {
    successRedirect: '/login',
    failureRedirect: '/signup',
    failureFlash: true
  }));

  router.post('/login', passport.authenticate('login', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    failureFlash: true
  }));


  return router;
}
