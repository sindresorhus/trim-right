'use strict';

module.exports = string => {
	let tail = string.length;

	const matches = string.match(/[\s\uFEFF\u00A0]+$/);

	tail -= (matches ? matches[0].length : 0);

	return string.slice(0, tail);
};
