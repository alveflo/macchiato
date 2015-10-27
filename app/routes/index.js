var express = require('express');
var router = express.Router();
var path = require('path');


module.exports = function(views_dir, passport) {
  router.get('/signup', function(req, res, next) {
    res.sendFile(path.join(views_dir, '/signup.html'), function (err) {
      if (err) { console.log(err);}
    });
  });

  router.get('/login', function(req, res) {
    if (req.isAuthenticated()) {
      res.redirect('/dashboard');
    } else {
      res.sendFile(path.join(views_dir, '/login.html'), function (err) {
        if (err) {
          console.log(err);
        }
      });
    }
  });

  router.get('/', function(req, res) {
    res.sendFile(path.join(views_dir, 'index.html'), function (err) {
      if (err) {
        console.log(err);
      }
    });
  });

  router.get('/signout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  router.post('/signup', function(req, res, next) {
    passport.authenticate('signup', function(err, user, info) {
      if (err) { return next(err); }
      if (!user) { return res.json({ error: req.flash('message').toString() }); }

      req.logIn(user, function(error) {
          if (error) { return res.json({ 'error': error }); }
          return res.json({ success: 'Ok!' });
      });

    })(req, res, next);
  });

  router.post('/login', function(req, res, next) {
    passport.authenticate('login', function(err, user, info) {
      if (err) { return next(err); }
      if (!user) { return res.json({ error: req.flash('message').toString() }); }

      req.logIn(user, function(error) {
          if (error) { return res.send({ 'error': error }); }
          return res.json({ success: 'Ok!' });
      });

    })(req, res, next);
  });

  return router;
};
