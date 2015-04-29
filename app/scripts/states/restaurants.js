'use strict';

angular.module('app.restaurants')
	.config(function ($stateProvider) {
		console.log('Defining state');
		$stateProvider
			.state('authenticated', {
				abstract: true,
				template: '<ui-view></ui-view>',
				resolve: {
					authenticated: function (User, $state) {
						console.log('Resolving is authenticated');
						return User.isLoggedIn()
							.then(function () {
								console.log('Is authenticated');
							}).catch(function () {
								$state.go('main');
							});
						
					}
				}
			})
			.state('list', {
				parent: 'authenticated',
				url: '/restaurants',
				templateUrl: 'views/restaurants.html',
				controller: 'RestaurantsListResolve',
				resolve: {
					restaurants: function (authenticated, Restaurant) {
						console.log('Resolving restaurants');
						return Restaurant.list();
					}
				}
			})
			.state('show', {
				parent: 'authenticated',
				url: '/restaurants/:id',
				templateUrl: 'views/show.html',
				controller: 'RestaurantsShow',
				resolve: {
					restaurant: function (authenticated, Restaurant, $stateParams, $state) {
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