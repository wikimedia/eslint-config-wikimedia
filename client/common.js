'use strict';

const { defineConfig } = require( 'eslint/config' );
const globals = require( 'globals' );
const unicorn = require( 'eslint-plugin-unicorn' ).default;

module.exports = defineConfig( {
	name: 'wikimedia/client/common',
	extends: [
		require( '../common' ),
		{ name: 'globals/browser', languageOptions: { globals: globals.browser } }
	],
	plugins: { unicorn },
	rules: {
		'no-alert': 'error',
		'no-console': 'error',
		'no-implied-eval': 'error',
		'unicorn/no-invalid-remove-event-listener': 'error',
		'security/detect-non-literal-regexp': 'off',
		'security/detect-unsafe-regex': 'off',
		'security/detect-possible-timing-attacks': 'off'
	}
} );
