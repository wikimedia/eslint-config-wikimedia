'use strict';

const { defineConfig } = require( 'eslint/config' );

module.exports = defineConfig( {
	name: 'wikimedia/language/rules-es2019',
	extends: [ require( './rules-es2018' ) ]
} );
