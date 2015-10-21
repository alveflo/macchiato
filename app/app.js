var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var shortid = require('shortid');
var mongoose = require('mongoose');
var app = express();

// Passport setup
var passport = require('passport');
var expressSession = require('express-session');
var bCrypt = require('bcrypt-nodejs');

app.use(expressSession({ secret: 'devSecret' }));
app.use(passport.initialize());
app.use(passport.session());

var flash = require('connect-flash');
app.use(flash());

// initialize Passport
require('./passport/init')(passport);

// Generate app version number
GLOBAL.makiatoVersion = shortid.generate();

// view engine setup
app.set('views', path.join(__dirname, 'views/templates'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
// Routes
var index = require('./routes/index');
var users = require('./routes/users');
var dashboard = require('./routes/dashboard');
var ide = require('./routes/ide');

app.use('/', index(passport));
app.use('/users', users(passport));
app.use('/dashboard', dashboard(passport));
app.use('/ide', ide(passport));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});



// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
  mongoose.connect('mongodb://localhost:27017/makiato');
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
