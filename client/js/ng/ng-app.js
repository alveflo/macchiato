(function(){'use strict';})();

var app = angular.module('mLogin', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/signup', {
        templateUrl: 'login/signup'
      })
      .otherwise({
        templateUrl: 'login/login'
      });
  }]);
