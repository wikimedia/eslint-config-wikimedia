'use strict';

const { defineConfig } = require( 'eslint/config' );

module.exports = defineConfig( {
	name: 'wikimedia/server',
	extends: [
		require( './common' ),
		require( './node' ),
		require( './language/es2022' )
	],
	rules: {
		'es-x/no-hashbang': 'off'
	}
} );
