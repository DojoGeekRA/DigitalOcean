(function () {
    'use strict';
    describe('filters module', function () {
        var $filter;
        beforeEach(module('filters'));
        beforeEach(inject(function ($injector) {
            $filter = $injector.get('$filter');
        }));
        describe('Megabytes', function () {
            var Megabytes;
            beforeEach(function () {
                Megabytes = $filter('Megabytes');
            });
            it('should append the suffix MB to an argument', function () {
                expect(Megabytes(0)).toBe('0 MB');
            });
        });
        describe('Gygabytes', function () {
            var Gygabytes;
            beforeEach(function () {
                Gygabytes = $filter('Gygabytes');
            });
            it('should append the suffix GB to an argument', function () {
                expect(Gygabytes(0)).toBe('0 GB');
            });
        });
    });
})();
