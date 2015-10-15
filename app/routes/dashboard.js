var express = require('express');
var authCtrl = require('../passport/authController');
var router = express.Router();

module.exports = function(passport) {
  router.get('/', authCtrl, function(req, res, next) {
    res.render('dashboard/dash', {
      version: GLOBAL.makiatoVersion,
      pretty: true
    })
  });
  return router;
}
