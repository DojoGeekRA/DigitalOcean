(function () {
    'use strict';
    describe('services module', function () {
        beforeEach(module('services'));
        describe('DropletsService', function () {
            var DropletsService,
                $httpBackend;
            beforeEach(inject(function ($injector) {
                DropletsService = $injector.get('DropletsService');
                $httpBackend = $injector.get('$httpBackend');
            }));
            describe('getDroplets', function () {
                beforeEach(function () {
                    $httpBackend.expectGET('https://api.digitalocean.com/v2/droplets')
                        .respond([]);
                });
                it('should make an ajax call to digital ocean api', function () {
                    DropletsService.getDroplets();
                });
                afterEach(function () {
                    $httpBackend.verifyNoOutstandingExpectation();
                });
            });
        });
    });
})();
