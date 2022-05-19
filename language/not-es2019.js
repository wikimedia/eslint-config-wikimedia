'use strict';

/* eslint-disable quote-props, quotes */
const merge = require( './merge' );
const rules = {
	"plugins": [ "es-x" ],
	"rules": {
		"es-x/no-bigint": "error",
		"es-x/no-global-this": "error",
		"es-x/no-promise-all-settled": "error",
		"no-restricted-properties": [
			"error",
			{
				"property": "matchAll",
				"message": "Unsupported method String.prototype.matchAll requires ES2020."
			}
		]
	}
};
module.exports = merge( rules, require( './not-es2020' ) );
