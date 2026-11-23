'use strict';

const { defineConfig } = require( 'eslint/config' );

module.exports = defineConfig( {
	name: 'wikimedia/client/es2019',
	extends: [
		require( './common' ),
		require( '../language/es2019' ),
		require( '../vue/es2019' )
	]
} );
