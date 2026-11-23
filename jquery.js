'use strict';

const { defineConfig } = require( 'eslint/config' );
const noJquery = require( 'eslint-plugin-no-jquery' );
const { legacyPluginConfig } = require( './lib/utils' );

module.exports = defineConfig( {
	name: 'wikimedia/jquery',
	extends: [
		legacyPluginConfig( 'no-jquery', noJquery, 'recommended' ),
		legacyPluginConfig( 'no-jquery', noJquery, 'deprecated-4.0' )
	],
	languageOptions: {
		globals: {
			$: 'readonly',
			jQuery: 'readonly'
		}
	},
	rules: {
		'no-jquery/no-animate': [
			'error',
			{
				allowScroll: true
			}
		],
		'no-jquery/no-animate-toggle': 'error',
		'no-jquery/no-class-state': 'error',
		'no-jquery/no-constructor-attributes': 'error',
		'no-jquery/no-done-fail': 'error',
		'no-jquery/no-each-util': 'error',
		'no-jquery/no-error': 'error',
		'no-jquery/no-extend': [
			'error',
			{
				allowDeep: true
			}
		],
		'no-jquery/no-fade': 'error',
		'no-jquery/no-global-eval': 'error',
		'no-jquery/no-global-selector': 'error',
		'no-jquery/no-grep': 'error',
		'no-jquery/no-in-array': 'error',
		'no-jquery/no-jquery-ui': 'error',
		'no-jquery/no-map-util': 'error',
		'no-jquery/no-noop': 'error',
		'no-jquery/no-parse-html-literal': 'error',
		'no-jquery/no-sizzle': [
			'error',
			{}
		],
		'no-jquery/no-slide': 'error',
		'no-jquery/no-trim': 'error'
	}
} );
