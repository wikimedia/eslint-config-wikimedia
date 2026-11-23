'use strict';

const { defineConfig } = require( 'eslint/config' );
const globals = require( 'globals' );
const esx = require( 'eslint-plugin-es-x' );

module.exports = defineConfig( {
	name: 'wikimedia/language/es2017',
	extends: [
		// Also define the globals when a project sets a lower ecmaVersion.
		{ name: 'globals/es2017', languageOptions: { globals: globals.es2017 } },
		{ name: 'es-x/restrict-to-es2017', ...esx.configs[ 'flat/restrict-to-es2017' ] },
		{ name: 'es-x/no-new-in-esnext', ...esx.configs[ 'flat/no-new-in-esnext' ] },
		require( './rules-es2017' )
	],
	languageOptions: {
		ecmaVersion: 2017
	}
} );
