(function () {
    'use strict';
    angular.module('app', [])
        .run(function ($rootScope) {
            $rootScope.message = 'A just for fun DigitalOcean API client';
        });
})();
