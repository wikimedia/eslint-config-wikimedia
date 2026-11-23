'use strict';

const { defineConfig } = require( 'eslint/config' );

module.exports = defineConfig( {
	name: 'wikimedia/client/es2020',
	extends: [
		require( './common' ),
		require( '../language/es2020' ),
		require( '../vue/es2020' )
	]
} );
