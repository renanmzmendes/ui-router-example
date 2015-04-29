'use strict';

angular.module('app.user')
	.controller('Authenticated', ['$scope', 'user', function ($scope, user) {
		$scope.user = user;
	}]);