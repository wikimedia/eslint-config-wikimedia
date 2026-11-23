'use strict';

const { defineConfig } = require( 'eslint/config' );

module.exports = defineConfig( {
	name: 'wikimedia/client/es2024',
	extends: [
		require( './common' ),
		require( '../language/es2024' ),
		require( '../vue/es2024' )
	]
} );
