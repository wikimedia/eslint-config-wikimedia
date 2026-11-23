'use strict';

const { defineConfig } = require( 'eslint/config' );
const mocha = require( 'eslint-plugin-mocha' ).default;

module.exports = defineConfig( {
	name: 'wikimedia/mocha',
	extends: [ mocha.configs.recommended ],
	rules: {
		'mocha/consistent-spacing-between-blocks': 'off',
		'mocha/no-hooks-for-single-case': 'off',
		'mocha/no-mocha-arrows': 'off',
		// Version 11 merges no-skipped-tests into this rule
		'mocha/no-pending-tests': 'off'
	}
} );
