(function(){'use strict';})();

var app = angular.module('mLogin', ['ngRoute', 'mLoginControllers']);

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
