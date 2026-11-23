'use strict';

const { defineConfig } = require( 'eslint/config' );
const compat = require( 'eslint-plugin-compat' );
const mediawiki = require( 'eslint-plugin-mediawiki' );
const browsers = require( 'browserslist-config-wikimedia/modern' );
const { getRules } = require( '../lib/utils' );

// Extend max-len.ignorePattern
const [ maxLenLevel, maxLenOptions ] = getRules( require( '../common' ), 'wikimedia/common' )[ 'max-len' ];
const maxLen = [ maxLenLevel, {
	...maxLenOptions,
	ignorePattern: `(${ maxLenOptions.ignorePattern }|[\\s]*(//|<!--) *\\* ?[\\S]+$)`
} ];

module.exports = defineConfig(
	{
		name: 'wikimedia/mediawiki/common',
		extends: [ mediawiki.configs[ 'flat/common' ] ],
		plugins: { compat },
		languageOptions: {
			globals: {
				mw: 'readonly',
				OO: 'readonly',
				require: 'readonly',
				module: 'readonly',
				exports: 'writable'
			},
			sourceType: 'commonjs'
		},
		rules: {
			'compat/compat': [
				'error',
				browsers.join( ',' )
			],
			'max-len': maxLen
		}
	},
	{
		name: 'wikimedia/mediawiki/common',
		files: [ '**/*.vue' ],
		extends: [ mediawiki.configs[ 'flat/vue' ] ],
		rules: {
			'vue/html-self-closing': [ 'error', {
				html: {
					void: 'never',
					normal: 'never',
					component: 'never'
				}
			} ],
			'vue/component-name-in-template-casing': [ 'error', 'kebab-case' ],
			'vue/no-child-content': [ 'error', {
				additionalDirectives: [ 'i18n-html' ]
			} ]
		}
	},
	// Repeat the JSON config from common, so that max-len above does not apply to JSON files.
	{
		name: 'wikimedia/mediawiki/common',
		files: [ '**/*.json', '**/*.jsonc' ],
		extends: [ require( '../json' ) ]
	}
);
