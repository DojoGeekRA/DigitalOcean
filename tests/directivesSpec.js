(function () {
    'use strict';
    describe('directives module', function () {
        var $compile,
            $rootScope,
            DropletMock;
        beforeEach(module('directives'));
        beforeEach(inject(function ($injector) {
            $compile = $injector.get('$compile');
            $rootScope = $injector.get('$rootScope');
            DropletMock = {
                'status': 'active',
                'memory': '512',
                'vcpus': 1
            };
        }));
        describe('status', function () {
            var $scope,
                element;
            beforeEach(function () {
                $scope = $rootScope.$new();
                $scope.droplet = DropletMock;
                element = $compile('<status></status>')($scope);
                $rootScope.$digest();
            });
            it('should contains the "Status: active" string in a child node', function () {
                expect(element[0].innerText).toBe('Status: active');
            });
        });
        describe('memory', function () {
            var $scope,
                element;
            beforeEach(function () {
                $scope = $rootScope.$new();
                $scope.droplet = DropletMock;
                element = $compile('<memory></memory>')($scope);
                $rootScope.$digest();
            });
            it('should contains the "Memory: 512MB" string in a child node', function () {
                expect(element[0].innerText).toBe('Memory: 512 MB');
            });
        });
        describe('cpus', function () {
            var $scope,
                element;
            beforeEach(function () {
                $scope = $rootScope.$new();
                $scope.droplet = DropletMock;
                element = $compile('<cpus></cpus>')($scope);
                $rootScope.$digest();
            });
            it('should contains the "CPUs: 1" string in a child node', function () {
                expect(element[0].innerText).toBe("CPUs: 1");
            });
        });
    });
})();
