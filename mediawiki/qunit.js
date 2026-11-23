'use strict';

const { defineConfig } = require( 'eslint/config' );

module.exports = defineConfig( {
	name: 'wikimedia/mediawiki/qunit',
	extends: [
		require( '../client/common' ),
		require( '../language/es2022' ),
		require( '../jquery' ),
		require( '../mediawiki' ),
		require( '../qunit' )
	],
	languageOptions: {
		globals: {
			sinon: 'readonly'
		}
	},
	rules: {
		'compat/compat': [ 'error', 'last 2 chrome versions, last 2 firefox versions, last 2 safari versions' ],
		'max-len': 'off',
		'no-jquery/no-global-selector': 'off',
		'no-jquery/no-parse-html-literal': 'off'
	}
} );
