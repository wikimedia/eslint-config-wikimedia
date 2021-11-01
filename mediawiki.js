'use strict';

const commonRules = require( './common' );

/* eslint-disable quote-props, quotes */
const config = {
	"globals": {
		"mw": "readonly",
		"OO": "readonly",
		"require": "readonly",
		"module": "readonly"
	},
	"plugins": [
		"mediawiki",
		"compat"
	],
	"rules": {
		"mediawiki/class-doc": "error",
		"mediawiki/msg-doc": "error",
		"mediawiki/valid-package-file-require": "error",
		"compat/compat": [
			"error",
			"last 2 chrome versions, last 2 firefox versions, last 2 opera versions, last 2 edge versions, ie >= 11, safari >= 9.1, iOS >= 9, android >= 4.3"
		]
	},
	"overrides": [
		{
			"files": [ "**/*.vue" ],
			"rules": {
				"no-implicit-globals": "off",
				"mediawiki/no-vue-dynamic-i18n": "error",
				"mediawiki/vue-exports-component-directive": "error",
				"vue/html-self-closing": [ "error", {
					"html": {
						"void": "never",
						"normal": "never",
						"component": "never"
					}
				} ]
			}
		}
	]
};

// Extend max-len.ignorePattern
config.rules[ 'max-len' ] = commonRules.rules[ 'max-len' ];
config.rules[ 'max-len' ][ 1 ].ignorePattern =
	'(' +
		config.rules[ 'max-len' ][ 1 ].ignorePattern +
		'|' +
		'[\\s]*(//|<!--) *\\* ?[\\S]+$' +
	')';

module.exports = config;
