'use strict';

const commonRules = require( './common' );
const browsers = require( 'browserslist-config-wikimedia/modern' );

/* eslint-disable quote-props, quotes */
const config = {
	"globals": {
		"mw": "readonly",
		"OO": "readonly",
		"require": "readonly",
		"module": "readonly",
		"exports": "writable"
	},
	"plugins": [
		"mediawiki",
		"compat"
	],
	"rules": {
		"mediawiki/class-doc": "error",
		"mediawiki/msg-doc": "error",
		"mediawiki/no-extended-unicode-identifiers": "error",
		"mediawiki/no-nodelist-unsupported-methods": "error",
		"mediawiki/valid-package-file-require": "error",
		"compat/compat": [
			"error",
			browsers.join( ',' )
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
				} ],
				"vue/component-name-in-template-casing": [ "error", "kebab-case" ],
				"vue/no-child-content": [ "error", {
					"additionalDirectives": [ "i18n-html" ]
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
// Duplicate JSON override from common rules to prevent max-len rule here taking precedent
const jsonOverride = commonRules.overrides.find( ( override ) => override.parser === 'eslint-plugin-json-es' );
config.overrides.push( jsonOverride );

module.exports = config;
