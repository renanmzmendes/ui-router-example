'use strict';

angular.module('app.restaurants')
	.config(function ($stateProvider) {
		console.log('Defining state');
		$stateProvider
			.state('list', {
				url: '/restaurants',
				templateUrl: 'views/restaurants.html',
				controller: 'RestaurantsListResolve',
				resolve: {
					restaurants: function (Restaurant) {
						console.log('Resolving restaurants');
						return Restaurant.list();
					}
				}
			})
			.state('show', {
				url: '/restaurants/:id',
				templateUrl: 'views/show.html',
				controller: 'RestaurantsShow',
				resolve: {
					restaurant: function (Restaurant, $stateParams, $state) {
						console.log('Resolving restaurant ' + $stateParams.id);
						return Restaurant.get($stateParams.id)
							.then(function (restaurant) {
								if (restaurant) {
									return restaurant;
								} else {
									$state.go('list');
								}
							});
					}
				}
			});
	});