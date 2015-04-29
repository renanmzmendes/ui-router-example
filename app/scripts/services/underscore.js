'use strict';

angular.module('uiRouterExampleApp')
	.service('_', ['$window', function ($window) {
		return $window._;
	}]);