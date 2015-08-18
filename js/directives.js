(function () {
    angular.module('directives', [])
        .directive('status', function () {
            return {
                restrict: 'E',
                template:  '<p><strong>Status: </strong><span ng-bind="droplet.status"></span></p>'
            };
        })
        .directive('memory', function () {
            return {
                restrict: 'E',
                template: '<p><strong>Memory: </strong><span ng-bind="droplet.memory | Megabytes"></span></p>'
            };
        })
        .directive('cpus', function () {
            return {
                restrict: 'E',
                template: '<p><strong>CPUs: </strong><span ng-bind="droplet.vcpus"></span></p>'
            };
        })
        .directive('disk', function () {
            return {
                restrict: 'E',
                template: '<p><strong>Disk: </strong><span ng-bind="droplet.disk | Gygabytes"></span></p>'
            };
        });
})();

