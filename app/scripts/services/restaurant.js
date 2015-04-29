'use strict';

angular.module('app.restaurants')
	.service('Restaurant', ['$q', '$timeout', '_', function ($q, $timeout, _) {
		
		var _attrs = {};
		var _id = 5;

		var Restaurant = function (attrs) {
			_attrs = attrs;
		};

		var _generateRestaurant = function (id) {
			return { id: id, name: 'restaurant ' + id.toString(), address: 'Rua ' + id + ', São Paulo - SP' };
		};

		var _restaurants = [
			_generateRestaurant(1),
			_generateRestaurant(2),
			_generateRestaurant(3),
			_generateRestaurant(4)
		];

		Restaurant.prototype.save = function () {
			var newAttrs = _.pick(_.extend(_attrs, { id: _id++ }), 'name', 'address');
			_restaurants.push(newAttrs);

			var def = $q.defer();

			$timeout(function () {
				def.resolve(newAttrs);
			}, 1000);

			return def.promise;
		};

		Restaurant.get = function (id) {
			var def = $q.defer();

			$timeout(function () {
				def.resolve(_.find(_restaurants, function (el) { return el.id.toString() === id.toString(); }));
			}, 1000);

			return def.promise;
		};

		Restaurant.list = function () {
			var def = $q.defer();

			$timeout(function () {
				console.log(_restaurants);
				def.resolve(_restaurants);
			}, 1000);

			return def.promise;
		};

		return Restaurant;

	}]);