'use strict';

const { defineConfig } = require( 'eslint/config' );

module.exports = defineConfig( {
	name: 'wikimedia/client/es2023',
	extends: [
		require( './common' ),
		require( '../language/es2023' ),
		require( '../vue/es2023' )
	]
} );
