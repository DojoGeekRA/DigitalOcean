(function () {
    'use strict';
    angular.module('filters', [])
        .filter('Megabytes', function () {
            return function (memory) {
                return memory + ' ' + 'MB';
            };
        });
})();
