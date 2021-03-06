'use strict';

/**
 * @ngdoc overview
 * @name uiRouterExampleApp
 * @description
 * # uiRouterExampleApp
 *
 * Main module of the application.
 */
angular
  .module('uiRouterExampleApp', [
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'app.user',
    'app.restaurants'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
  	 $urlRouterProvider.otherwise('/restaurants');

  	 $stateProvider
  	 	.state('main', {
  	 		url: '/',
  	 		templateUrl: 'views/main.html'
  	 	});
  });