'use strict';

angular.module('app.restaurants')
	.config(function ($stateProvider) {
		console.log('Defining state');
		$stateProvider
			.state('restaurants', {
				url: '/restaurants',
				templateUrl: 'views/restaurants.html',
				controller: 'RestaurantsListResolve'
				resolve: {
					restaurants: function (Restaurant) {
						console.log('Resolving restaurants');
						return Restaurant.list();
					}
				}
			});
	});