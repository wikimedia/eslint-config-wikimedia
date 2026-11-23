'use strict';

const { defineConfig } = require( 'eslint/config' );

module.exports = defineConfig( {
	name: 'wikimedia/client/es6',
	extends: [
		require( './common' ),
		require( '../language/es6' ),
		require( '../vue3/es6' )
	]
} );
