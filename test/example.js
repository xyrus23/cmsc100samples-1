/* test/example.js */
var assert = require('assert'),
	example = require(__dirname+'/../example');

describe('example#add(num1, num2)', function () {
	// an array containing a list of test cases and
	// their corresponding expected values
	var tests = [
			{args: [0, 0],			expected: 0},		// both zero
			{args: [5, 0],			expected: 5},		// positive, zero
			{args: [0, 7],			expected: 7},		// zero, positive
			{args: [5, 7],			expected: 12},		// positive, positive
			{args: [-19, 0],		expected: -19},		// negative, zero
			{args: [0, -11],		expected: -11},		// zero, negative
			{args: [-19, -11],		expected: -30},		// negative, negative
			{args: [5, -11],		expected: -6},		// positive, negative
			{args: [-19, 7],		expected: -12}		// negative positive
	];

	// iterate through each test case
	tests.forEach(function(test) {
		it(test.args[0]+'+'+test.args[1]+' should be equal to '+test.expected, function () {
			assert.equal(example.add(test.args[0],test.args[1]), test.expected);
		});
	});	
});
