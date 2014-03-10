'use strict';

angular.module('simpleGroupsApp', [
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/group.html',
        controller: 'GroupCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
