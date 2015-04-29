'use strict';

angular.module('app.restaurants')
	.controller('RestaurantsListClassic', ['Restaurant', '$scope', function (Restaurant, $scope) {
		Restaurant.list()
			.then(function (restaurants) {
				$scope.restaurants = restaurants;
			});
	}])
	.controller('RestaurantsListResolve', ['restaurants', '$scope', function (restaurants, $scope) {
		$scope.restaurants = restaurants;
	}])
	.controller('RestaurantsShow', ['restaurant', '$scope', function (restaurant, $scope) {
		$scope.restaurant = restaurant;
	}]);