(function () {
    'use strict';
    describe('directives module', function () {
        var $compile,
            $rootScope;
        beforeEach(module('directives'));
        beforeEach(inject(function ($injector) {
            $compile = $injector.get('$compile');
            $rootScope = $injector.get('$rootScope');
        }));
        describe('status', function () {
            var $scope,
                element;
            beforeEach(function () {
                $scope = $rootScope.$new();
                $scope.droplets = [{
                    'droplet': {
                        'status': 'active'
                    }
                }];
                element = $compile('<status></status>')($rootScope);
                $rootScope.$digest();
            });
            it('should contains the "active" string in a child noce', function () {
                expect(element.html()).toBe('<p><strong>Status: </strong><span ng-bind="droplet.status" class="ng-binding"></span></p>');
            });
        });
    });
})();
