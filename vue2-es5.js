'use strict';

/* eslint-disable quote-props, quotes */
module.exports = {
	"overrides": [ {
		"files": [ "**/*.vue" ],
		"extends": [
			"./vue2-common",
			// We can't use ./language/es5 here, because ecmaVersion: 5 breaks the Vue plugin
			// Instead, use ES6, then es-x/no-2015 to prohibit ES6+ syntax
			// But don't use ./language/es-6 directly, because we don't want rules-es6
			"./language/rules-es5",
			"plugin:es-x/restrict-to-es5"
		],
		"plugins": [ "es-x" ],
		// The Vue plugin sets sourceType: "module" and enables JSX: undo those things
		"parserOptions": {
			// ecmaVersion: 5 breaks the Vue plugin, we have to use 6 (see also above)
			"ecmaVersion": 6,
			"sourceType": "script",
			"ecmaFeatures": {
				"jsx": false
			}
		},
		"env": {
			"es6": false
		}
	} ]
};
