'use strict';

const { defineConfig } = require( 'eslint/config' );

module.exports = defineConfig( {
	name: 'wikimedia/language/rules-es2017',
	extends: [ require( './rules-es2016' ) ]
} );
