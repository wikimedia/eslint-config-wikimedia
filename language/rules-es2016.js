'use strict';

const { defineConfig } = require( 'eslint/config' );
const unicorn = require( 'eslint-plugin-unicorn' );

module.exports = defineConfig( {
	name: 'wikimedia/language/rules-es2016',
	extends: [ require( './rules-es6' ) ],
	plugins: { unicorn },
	rules: {
		'unicorn/prefer-includes': 'error'
	}
} );
