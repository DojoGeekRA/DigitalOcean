(function () {
    'use strict';
    angular.module('services', [])
        .config(function ($httpProvider) {
            $httpProvider.defaults.headers.common.Authorization = 'Bearer 0f938ddb221e5b3e0d3461ea0a530b502aff27b0172c52543a6c8280a15706ef';
        })
        .factory('DropletsService', function ($q, $http) {

            var getDroplets = function () {
                var deferred = $q.defer();
                $http.get('https://api.digitalocean.com/v2/droplets')
                    .then(function (response) {
                        deferred.resolve(response.data.droplets);
                    });
                return deferred.promise;
            };

            return {
                'getDroplets': getDroplets
            };

        })
})();
