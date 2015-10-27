(function(){'use strict';})();

var memberModule = angular.module('MemberModule',  []);

var dashboardModule = angular.module('dashboardModule', [
	'ngRoute'
	])
	.config(function($routeProvider) {
		$routeProvider
			.when('/start', {
				templateUrl: '/dashboard/start',
				controller: 'DashboardStartCtrl'
			})
			.when('/workspaces', {
				templateUrl: '/dashboard/workspaces',
				controller: 'DashboardWorkspaceCtrl',
			})
			.when('/settings', {
				templateUrl: '/dashboard/settings',
				controller: 'DashboardSettingsCtrl'
			});
	});