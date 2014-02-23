'use strict';

/* Controllers */

var phonecatControllers = angular.module('groupControllers', []);

phonecatControllers.controller('GroupCtrl', ['$scope',
  function($scope) {
    $scope.groups = [
        {
            name: 'Group 1'
        },
        {
            name: 'Group 2'
        },
        {
            name: 'Group 3'
        }
    ];
  }]);

//phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
//  function($scope, $routeParams, Phone) {
//    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
//      $scope.mainImageUrl = phone.images[0];
//    });
//
//    $scope.setImage = function(imageUrl) {
//      $scope.mainImageUrl = imageUrl;
//    }
//  }]);
