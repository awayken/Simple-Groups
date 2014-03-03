'use strict';

var groupControllers = angular.module( 'groupControllers', [] );

groupControllers.controller( 'GroupCtrl', [
    '$scope', 'GroupData',
    function( $scope, groupData ) {
        $scope.groups = groupData.query();
    }
]);
