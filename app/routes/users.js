var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var UsersModel = require('../models/user');



module.exports = function(passport) {
  router.get('/delete', function(req, res, next) {
    UsersModel.findOneAndRemove({username: 'victorzki'},function(err, users) {
        if (err) res.send(err);
        res.send('Deleted!');
    });
  });

  router.get('/', function(req, res, next) {
    UsersModel.find({},function(err, users) {
        if (err) res.send(err);
        res.send(users);
    });
  });

  /* GET users listing. */
  router.get('/create', function(req, res, next) {
    UsersModel({ username: 'victorzki' }).save(function(err) {
      if (err) res.send(err)
      else res.send('respond with a resource');
    });
  });

  return router;
}
