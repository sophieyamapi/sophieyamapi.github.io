'use strict';

/**
 * @ngdoc overview
 * @name sophieyamapigithubioApp
 * @description
 * # sophieyamapigithubioApp
 *
 * Main module of the application.
 */
angular.module('sophieyamapigithubioApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
]).config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
    }).when('/projects/day1', {
        templateUrl: 'views/projects/day1.html'
    })
    .when('/projects/day2', {
        templateUrl: 'views/projects/day2.html',
        controller: 'day2Ctrl',
        controllerAs: 'day2'
    })
    .when('/projects/day3', {
        templateUrl: 'views/projects/day3.html',
        controller: 'day3Ctrl',
        controllerAs: 'day3'
    })
    .when('/projects/day4', {
        templateUrl: 'views/projects/day4.html',
        controller: 'day4Ctrl',
        controllerAs: 'day4'
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
