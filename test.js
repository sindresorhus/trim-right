'use strict';
var test = require('ava');
var trimRight = require('./');

test(function (t) {
	t.assert(trimRight('  unicorn  ') === '  unicorn');
	t.assert(trimRight('unicorn\r\n  \n') === 'unicorn');
	t.end();
});
