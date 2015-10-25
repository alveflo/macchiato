memberModule.controller('SignupController', ['$scope', '$http', function($scope, $http) {
  // Form field validation rules
  $('.ui.form').form({
    inline: true,
    fields: {
      'username': 'empty',
      'email': 'email',
      'password': 'minLength[6]',
      'verify-password': 'match[password]'
    },
    onSuccess: function(event, fields) {
      event.preventDefault();
    }
  });
  $scope.formData = {};
  $scope.error = '';
  $scope.signup = function() {
    if ($('.ui.form').form('is valid')) {
      $http.post('/signup', $scope.formData).success(function(data) {
        console.log(data);
        if (!data.success) {
          $scope.error = data.error;
        } else {
          window.location.replace('/dashboard');
        }
      });
    }
  };
}]);
