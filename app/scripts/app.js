'use strict';

angular.module('ngFancyboxBasicApp', [
  'ngRoute',
  'ra.fancyboxBasic'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
