var express = require('express');
var authCtrl = require('../passport/authController');
var router = express.Router();



module.exports = function(passport) {
  router.get('/', authCtrl, function(req, res) {
    res.render('ide/editor.jade', {
      version: GLOBAL.makiatoVersion
    });
  });
  return router;
}
