'use strict';

const { defineConfig } = require( 'eslint/config' );

module.exports = defineConfig( {
	name: 'wikimedia/client',
	extends: [ require( './client/es2019' ) ]
} );
