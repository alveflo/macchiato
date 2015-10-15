(function(){'use strict';})();

var mLoginControllers = angular.module('mLoginControllers', []);

mLoginControllers.controller('LoginCtrl', ['$scope','$http',
function($scope, $http) {
  $scope.$on('$viewContentLoaded', function() {
    $(document).trigger('ready');
    $('.ui.form').form({
      inline: true,
      on: 'blur',
      fields: {
        'username': 'empty',
        'password': 'empty'
      },
    });
  });
  $scope.login = function() {
    if ($('.ui.form').form('is valid')) {
      $http({
        method: 'POST',
        url: '/login/login',
        data: $.param($scope.user),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).success(function(data) {
        console.log(data);
        if (data.success)
          $scope.successMsg = 'Logged in!';
        else {
          $scope.errorMsg = data.errors;
        }
      });
    }
  };
}]);

mLoginControllers.controller('SignupCtrl', ['$scope','$http',
function($scope, $http) {
  $scope.created = false;
  $scope.$on('$viewContentLoaded', function() {
    $('.ui.form').form({
      inline: true,
      on: 'blur',
      fields: {
        'username': 'empty',
        'email': 'email',
        'password': 'minLength[6]',
        'verify-password': 'match[password]',
        'robotchecker': 'checked'
      }
    });
  });
  $scope.register = function() {
    if ($('.ui.form').form('is valid')) {
      $http({
        method: 'POST',
        url: '/login/signup',
        data: $.param($scope.user),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).success(function(data) {
        if (data.success)
          $scope.successMsg = 'Signed up!';
        else {
          $scope.errorMsg = data.errors;
        }
      });
    }
  };
}]);
