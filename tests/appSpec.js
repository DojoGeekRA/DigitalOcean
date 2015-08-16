(function () {
    'use strict';
    describe('App module', function () {
        var $rootScope;
        beforeEach(module('app'));
        beforeEach(inject(function ($injector) {
            $rootScope = $injector.get('$rootScope');
        }));
        it('should have a property called "message"', function () {
            expect($rootScope.message).toBeDefined();
        });
        it('should have a message "A just for fun DigitalOcean API client"', function () {
            expect($rootScope.message).toBe("A just for fun DigitalOcean API client");
        });
    });
})();
