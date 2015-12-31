import test from 'ava';
import fn from './';

test(t => {
	t.is(fn('  unicorn  '), '  unicorn');
	t.is(fn('unicorn\r\n  \n'), 'unicorn');
	t.is(fn('unicorn\u00A0\uFEFF'), 'unicorn');

	// zero-width space (zws), next line character (nel), non-character (bom) are not whitespace
	t.is(fn('\u200B\u0085\uFFFE'), '\u200B\u0085\uFFFE');
});
