'use strict';

const { defineConfig } = require( 'eslint/config' );

module.exports = defineConfig( {
	name: 'wikimedia/language/es2015',
	extends: [ require( './es6' ) ]
} );
