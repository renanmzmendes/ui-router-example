'use strict';

angular.module('app.restaurants')
	.config(function ($stateProvider) {
		console.log('Defining state');
		$stateProvider
			.state('authenticated', {
				abstract: true,
				// template: '<ui-view></ui-view>',
				templateUrl: 'views/authenticated.html',
				controller: 'Authenticated',
				resolve: {
					user: function (User, $state) {
						console.log('Resolving is authenticated');
						return User.isLoggedIn()
							.then(function (user) {
								console.log('Is authenticated');
								console.log(user);
								return user;
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
					restaurants: function (user, Restaurant) {
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
					restaurant: function (user, Restaurant, $stateParams, $state) {
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