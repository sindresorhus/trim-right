'use strict';
module.exports = function (str) {
	var tail = str.length;

	while (/[\s\uFEFF\xA0]/.test(str[tail - 1])) {
		tail--;
	}

	return str.slice(0, tail);
};
