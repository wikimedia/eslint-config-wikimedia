'use strict';

const { defineConfig } = require( 'eslint/config' );

module.exports = defineConfig( {
	name: 'wikimedia/language/rules-es2020',
	extends: [ require( './rules-es2019' ) ]
} );
