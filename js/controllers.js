(function () {
    'use strict';
    angular.module('controllers', ['services'])
        .controller('DropletListController', function ($scope, DropletsService) {
            DropletsService.getDroplets()
                .then(function (droplets) {
                    $scope.droplets = droplets;
                });
        });
})();
