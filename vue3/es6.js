'use strict';

const { defineConfig } = require( 'eslint/config' );

module.exports = defineConfig( {
	name: 'wikimedia/vue3/es6',
	files: [ '**/*.vue' ],
	extends: [
		require( './common' ),
		require( '../language/es6' )
	]
} );
