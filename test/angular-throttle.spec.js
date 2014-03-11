'use strict';

describe('angular-throttle', function () {
	var $throttle;

	beforeEach(module('functions'));
	beforeEach(inject(function (_$throttle_) {
		$throttle = _$throttle_;
	}));

	it('should be a function', function () {
		expect(typeof $throttle).toBe('function');
	});
});
