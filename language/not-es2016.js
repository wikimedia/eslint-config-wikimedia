'use strict';

/* eslint-disable quote-props, quotes */
const merge = require( './merge' );
const rules = {
	"plugins": [ "es-x" ],
	"rules": {
		"es-x/no-object-entries": "error",
		"es-x/no-object-getownpropertydescriptors": "error",
		"es-x/no-object-values": "error",
		"no-restricted-properties": [
			"error",
			{
				"property": "padEnd",
				"message": "Unsupported method String.prototype.padEnd requires ES2017."
			},
			{
				"property": "padStart",
				"message": "Unsupported method String.prototype.padStart requires ES2017."
			}
		]
	}
};
module.exports = merge( rules, require( './not-es2017' ) );
