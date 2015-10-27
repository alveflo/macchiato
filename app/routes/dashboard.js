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

  router.get('/start', authCtrl, function(req, res, next) {
  	res.sendFile(path.join(views_dir, 'workspacestart.html'), function (err) {
  		if (err) { console.log(err); }
  		else { console.log('Workspacestart!'); }
  	});
  });

  router.get('/workspaces', authCtrl, function(req, res, next){
  	res.sendFile(path.join(views_dir, 'workspaces.html'), function (err) {
  		if (err) { console.log(err); }
  		else { console.log('WOOOORKSPAAAAAEEEJS!!'); }
  	});
  });

  router.get('/settings', authCtrl, function(req, res, next){
  	res.sendFile(path.join(views_dir, 'settings.html'), function (err) {
  		if (err) { console.log(err); }
  		else { console.log('HERE COMES SETTINGS!!'); }
  	});
  });

  router.get('/loggedInUser', authCtrl, function(req, res, next) {
  	console.log('user: ' + req.user);
  	res.send({username: req.user.username});
  });
  return router;
}
