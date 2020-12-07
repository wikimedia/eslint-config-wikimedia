'use strict';

/* eslint-disable quote-props, quotes */
module.exports = {
	"extends": [
		"./client-common",
		"./language/es5",
		"./vue2-es5"
	],
	"rules": {
		"no-restricted-properties": [
			"error",
			{
				"property": "parentElement",
				"message": "Prefer parentNode to parentElement as Node.parentElement is not supported by IE11."
			}
		]
	}
};
