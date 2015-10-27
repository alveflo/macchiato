var express = require('express');
var authCtrl = require('../passport/authController');
var router = express.Router();
var path = require('path');

module.exports = function(views_dir, passport) {
  router.get('/', authCtrl, function(req, res, next) {
    res.sendFile(path.join(views_dir, 'dashboard.html'), function (err) {
      if (err) { console.log(err);}
      else { console.log('Yep!'); }
    });
  });
  return router;
};
