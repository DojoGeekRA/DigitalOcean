(function () {
    'use strict';
    describe('Controllers tests', function () {
        var $controller,
            $rootScope,
            $q;
        beforeEach(module('controllers'));
        beforeEach(inject(function ($injector) {
            $controller = $injector.get('$controller');
            $rootScope = $injector.get('$rootScope');
            $q = $injector.get('$q');
        }));
        describe('DropletListController', function () {
            var DropletListController,
                $scope,
                DropletsService,
                DropletsMock,
                deferred;
            beforeEach(function () {
                $scope = $rootScope.$new();
                DropletsService = {
                    'getDroplets': function () {
                        deferred = $q.defer();
                        return deferred.promise;
                    }
                };
                spyOn(DropletsService, 'getDroplets').and.callThrough();
                DropletsMock = [];
                DropletListController = $controller('DropletListController', {
                    '$scope': $scope,
                    'DropletsService': DropletsService
                });
            });
            it('should call "DropletsService.getDroplets"', function () {
                deferred.resolve();
                expect(DropletsService.getDroplets).toHaveBeenCalled();
            });
            it('should publish a "droplets" property on the scope', function () {
                deferred.resolve(DropletsMock);
                $rootScope.$digest();
                expect($scope.droplets).toBeDefined();
            });
        });
    });
})();
