'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/view1', {
		templateUrl: 'view1/view1.html',
		controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

}]);

function Hello($scope, $http) {
	$http.get('http://rest-service.guides.spring.io/greeting').
		success(function(data) {
			$scope.greeting = data;
		});
}