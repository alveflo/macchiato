var express = require('express');
var authCtrl = require('../passport/authController');
var router = express.Router();

module.exports = function(passport) {
  router.get('/', authCtrl, function(req, res, next) {
    console.log(req.user);
    res.render('dashboard/dash', {
      version: GLOBAL.makiatoVersion,
      pretty: true,
      user: req.user,
      workspaces: [
        {
          'name': 'Simple page',
          'description': 'A personal home page',
          'path': 'user/' + req.user.username + '/personal-home-page',
        },
        {
          'name': 'Company page',
          'description': 'Company page for The Empire',
          'path': 'user/' + req.user.username + '/company-page',
        }

      ]
    })
  });
  return router;
}
