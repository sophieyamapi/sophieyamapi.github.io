'use strict';

/**
 * @ngdoc overview
 * @name sophieyamapigithubioApp
 * @description
 * # sophieyamapigithubioApp
 *
 * Main module of the application.
 */
angular
  .module('sophieyamapigithubioApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/projects/day1', {
          templateUrl: 'views/projects/day1.html'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
