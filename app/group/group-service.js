'use strict';
groupControllers

var groupServices = angular.module( 'groupServices', [] );

groupServices.factory( 'GroupData', [
    function(){
        return {
            query: function() {
                return [
                    {
                        name: 'Hello'
                ];
            }
        };
    }
]);
