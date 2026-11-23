'use strict';

const { defineConfig } = require( 'eslint/config' );

module.exports = defineConfig( {
	name: 'wikimedia/client/es2021',
	extends: [
		require( './common' ),
		require( '../language/es2021' ),
		require( '../vue/es2021' )
	]
} );
