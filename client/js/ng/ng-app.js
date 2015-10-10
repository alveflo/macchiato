(function(){'use strict';})();

var app = angular.module('mLogin', ['ngRoute', 'mLoginControllers', 'firebase'])
  .value('fbURL', 'https://makiato-db.firebaseio.com/')
  .service('fbRef', function(fbURL) {
    return new Firebase(fbURL);
  })
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/signup', {
        templateUrl: 'views/authforms/signup.html',
        controller: 'SignupCtrl'
      })
      .otherwise({
        templateUrl: 'views/authforms/login.html',
        controller: 'LoginCtrl'
      });
  }]);
