'use strict';

const { defineConfig } = require( 'eslint/config' );
const mocha = require( 'eslint-plugin-mocha' );

module.exports = defineConfig( {
	name: 'wikimedia/mocha',
	extends: [ mocha.configs.flat.recommended ],
	rules: {
		'mocha/consistent-spacing-between-blocks': 'off',
		'mocha/no-hooks-for-single-case': 'off',
		'mocha/no-mocha-arrows': 'off',
		'mocha/no-skipped-tests': 'off'
	}
} );
