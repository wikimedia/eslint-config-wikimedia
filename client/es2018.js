'use strict';

const { defineConfig } = require( 'eslint/config' );

module.exports = defineConfig( {
	name: 'wikimedia/client/es2018',
	extends: [
		require( './common' ),
		require( '../language/es2018' ),
		require( '../vue/es2018' )
	]
} );
