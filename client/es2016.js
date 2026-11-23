'use strict';

const { defineConfig } = require( 'eslint/config' );

module.exports = defineConfig( {
	name: 'wikimedia/client/es2016',
	extends: [
		require( './common' ),
		require( '../language/es2016' ),
		require( '../vue/es2016' )
	]
} );
