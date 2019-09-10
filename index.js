'use strict';

module.exports = string => {
	let tail = string.length;

	while (/[\s\uFEFF\u00A0]/.test(string[tail - 1])) {
		tail--;
	}

	return string.slice(0, tail);
};
