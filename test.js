'use strict';
var test = require('ava');
var trimRight = require('./');

test(function (t) {
	t.assert(trimRight('  unicorn  ') === '  unicorn');
	t.assert(trimRight('unicorn\r\n  \n') === 'unicorn');
	t.assert(trimRight('unicorn\u00A0\uFEFF') === 'unicorn');

	// zero-width space (zws), next line character (nel), non-character (bom) are not whitespace
	t.assert(trimRight('\u200B\u0085\uFFFE') === '\u200B\u0085\uFFFE');

	t.end();
});
