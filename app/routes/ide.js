var express = require('express');
var authCtrl = require('../passport/authController');
var router = express.Router();
var path = require('path');

module.exports = function(views_dir, passport) {
  router.get('/', authCtrl, function(req, res) {
    res.sendFile(path.join(views_dir, '/editor.html'), function (err) {
      if (err) { console.log(err); }
    });
  });
  return router;
}
