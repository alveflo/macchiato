'use strict';

var app = angular.module('mLogin', ['firebase']);

app.value('fbURL', 'https://makiato-db.firebaseio.com/')
app.service('fbRef', function(fbURL) {
  return new Firebase(fbURL);
});

app.controller('LoginCtrl', function($scope, fbRef) {
  $scope.login = function() {
    fbRef.authWithPassword({
      email: $scope.user.email,
      password: $scope.user.password
    }, function(error, authData) {
      $scope.errorMsg = $scope.successMsg = null;
      if (error) {
        $scope.errorMsg = error.message;
      } else {
        $scope.successMsg = 'Logged in!';
        console.log(authData);
      }
      $scope.$apply();
    });
  };
});
