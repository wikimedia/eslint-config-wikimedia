'use strict';

const { defineConfig } = require( 'eslint/config' );
const unicorn = require( 'eslint-plugin-unicorn' );

module.exports = defineConfig( {
	name: 'wikimedia/language/rules-es2018',
	extends: [ require( './rules-es2017' ) ],
	plugins: { unicorn },
	rules: {
		'unicorn/no-useless-fallback-in-spread': 'error'
	}
} );
