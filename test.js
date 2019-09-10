import test from 'ava';
import trimRight from '.';

test('main', t => {
	t.is(trimRight('  unicorn  '), '  unicorn');
	t.is(trimRight('unicorn\r\n  \n'), 'unicorn');
	t.is(trimRight('unicorn\u00A0\uFEFF'), 'unicorn');

	// Zero-width space (zws), next line character (nel), non-character (bom) are not whitespace.
	t.is(trimRight('\u200B\u0085\uFFFE'), '\u200B\u0085\uFFFE');
});
