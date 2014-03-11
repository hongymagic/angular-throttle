'use strict';

describe('angular-throttle', function () {
	var noop = function () { };
	var $throttle;

	beforeEach(module('functions'));
	beforeEach(inject(function (_$throttle_) {
		$throttle = _$throttle_;
	}));

	it('should be a function', function () {
		expect(typeof $throttle).toBe('function');
	});

	it('should return another function', function () {
		expect(typeof $throttle(100)).toBe('function');
		expect(typeof $throttle(100, noop)).toBe('function');
		expect(typeof $throttle(100, true, noop)).toBe('function');
		expect(typeof $throttle(100, true, noop, false)).toBe('function');
		expect(typeof $throttle(100, true, noop, true)).toBe('function');
	});
});
