(function(){'use strict';})();

var app = angular.module('mLogin', ['ngRoute', 'mLoginControllers', 'firebase']);

app.value('fbURL', 'https://makiato-db.firebaseio.com/');

app.service('fbRef', function(fbURL) {
  return new Firebase(fbURL);
});

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/signup', {
        templateUrl: 'login/signup',
        controller: 'SignupCtrl'
      })
      .otherwise({
        templateUrl: 'login/login',
        controller: 'LoginCtrl'
      });
  }]);
