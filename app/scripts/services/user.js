'use strict';

angular.module('app.user')
	.service('User', ['$q', function ($q) {
	
		var _isLoggedIn = function () {
			// Get auth token and check its validity with the server

			var def = $q.defer();

			// def.resolve({ user: 'renan.mendes@maplink.com.br' });
			def.reject();

			return def.promise;
		};

		return {
			isLoggedIn: _isLoggedIn
		};
	}]);