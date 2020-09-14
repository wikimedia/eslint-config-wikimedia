'use strict';

/* eslint-disable quote-props, quotes */
const merge = require( './merge' );
const rules = {
	"rules": {
		"no-restricted-properties": [
			"error",
			{
				"property": "replaceAll",
				"message": "Unsupported method String.prototype.replaceAll requires ESNext."
			}
		]
	}
};
module.exports = merge( rules, require( './not-es2021' ) );
