(function(){'use strict';})();

var mLoginControllers = angular.module('mLoginControllers', []);

mLoginControllers.controller('LoginCtrl', ['$scope', 'fbRef', function($scope, fbRef) {
  $scope.$on('$viewContentLoaded', function() {
    $(document).trigger('ready');
    $('.ui.form').form({
      inline: true,
      on: 'blur',
      fields: {
        'email': 'email',
        'password': 'empty'
      },
      onSuccess: function(event, fields) {
        event.preventDefault();
      }
    });
  });
  $scope.login = function() {
    if ($('.ui.form').form('is valid')) {
      fbRef.authWithPassword({
        email: $scope.user.email,
        password: $scope.user.password
      }, function(error, authData) {
        $scope.errorMsg = $scope.successMsg = null;
        if (error) {
          $scope.errorMsg = error.message;
        } else {
          $scope.successMsg = 'Logged in!';
        }
        $scope.$apply();
      });
    }
  };
}]);

mLoginControllers.controller('SignupCtrl', ['$scope', 'fbRef', function($scope, fbRef) {
  $scope.created = false;
  $scope.$on('$viewContentLoaded', function() {
    $('.ui.form').form({
      inline: true,
      on: 'blur',
      fields: {
        'email': 'email',
        'password': 'minLength[6]',
        'verify-password': 'match[password]',
        'robotchecker': 'checked'
      },
      onSuccess: function(event, fields) {
        event.preventDefault();
      }
    });
  });
  $scope.register = function() {
    if ($('.ui.form').form('is valid')) {
      fbRef.createUser({
        email: $scope.user.email,
        password: $scope.user.password
      }, function(error, userData) {
        if (error) {
          $scope.errorMsg = error.message;
        } else {
          $scope.successMsg = 'Account successfully created!';
          $scope.created = true;
        }
        $scope.$apply();
      });
    }
  };
}]);
