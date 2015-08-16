(function () {
    'use strict';
    angular.module('app', ['controllers'])
        .run(function ($rootScope) {
            $rootScope.message = 'A just for fun DigitalOcean API client';
        });
})();
