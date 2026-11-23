'use strict';

const { defineConfig } = require( 'eslint/config' );

module.exports = defineConfig( {
	name: 'wikimedia/client/es2017',
	extends: [
		require( './common' ),
		require( '../language/es2017' ),
		require( '../vue/es2017' )
	]
} );
