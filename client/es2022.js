'use strict';

const { defineConfig } = require( 'eslint/config' );

module.exports = defineConfig( {
	name: 'wikimedia/client/es2022',
	extends: [
		require( './common' ),
		require( '../language/es2022' ),
		require( '../vue/es2022' )
	]
} );
