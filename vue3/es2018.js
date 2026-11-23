'use strict';

const { defineConfig } = require( 'eslint/config' );

module.exports = defineConfig( {
	name: 'wikimedia/vue3/es2018',
	files: [ '**/*.vue' ],
	extends: [
		require( './common' ),
		require( '../language/es2018' )
	]
} );
