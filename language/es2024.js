'use strict';

const { defineConfig } = require( 'eslint/config' );
const globals = require( 'globals' );

module.exports = defineConfig( {
	name: 'wikimedia/language/es2024',
	extends: [
		// Also define the globals when a project sets a lower ecmaVersion.
		{ name: 'globals/es2024', languageOptions: { globals: globals.es2024 } },
		require( './rules-es2024' )
	],
	languageOptions: {
		ecmaVersion: 2024
	}
} );
