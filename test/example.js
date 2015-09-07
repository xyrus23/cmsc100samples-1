/* test/example.js */
var assert = require('assert'),
	example = require(__dirname+'/../example');

describe('example#add(num1, num2)', function () {
	it('5+2 should be equal to 7', function () {
		assert.equal(example.add(5,2), 7);
	});
});
