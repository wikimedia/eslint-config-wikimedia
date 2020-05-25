'use strict';

/* eslint-disable quote-props, quotes */
// Nothing to merge with yet
module.exports = {
	"rules": {
		"no-restricted-properties": [
			"error",
			{
				"property": "matchAll",
				"message": "Unsupported method String.prototype.matchAll is still experimental."
			}
		]
	}
};
