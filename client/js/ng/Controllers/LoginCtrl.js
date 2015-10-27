memberModule.controller('LoginController', ['$scope', '$http', function($scope, $http) {
  // Form field validation rules
  $('.ui.form').form({
    inline: true,
    fields: {
      'username': 'empty',
      'password': 'empty'
    },
    onSuccess: function(event, fields) {
      event.preventDefault();
    }
  });
  $scope.formData = {};
  $scope.error = '';
  $scope.login = function() {
    if ($('.ui.form').form('is valid')) {
      $http.post('/login', $scope.formData).success(function(data) {
        console.log(data);
        if (!data.success) {
          $scope.error = data.error;
        } else {
          console.log(data);
          window.location.replace('/dashboard#/start');
        }
      });
    }
  };
}]);
