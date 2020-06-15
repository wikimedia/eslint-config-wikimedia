'use strict';

/* eslint-disable quote-props, quotes */
// Nothing to merge with yet
module.exports = {
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
