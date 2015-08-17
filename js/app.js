(function () {
    'use strict';
    angular.module('app', ['controllers', 'filters'])
        .run(function ($rootScope) {
            $rootScope.message = 'A just for fun DigitalOcean API client';
        });
})();
