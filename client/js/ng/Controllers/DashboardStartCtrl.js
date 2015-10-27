dashboardModule.controller('DashboardStartCtrl', ['$scope', '$http',
	function($scope, $http) {
		$http.get('/dashboard/loggedInUser').success(function(data) {
        	$scope.username = data.username;
      });
	}
]);