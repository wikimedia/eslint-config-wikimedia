'use strict';

const { defineConfig } = require( 'eslint/config' );

module.exports = defineConfig( {
	name: 'wikimedia/language/rules-es2022',
	extends: [ require( './rules-es2021' ) ]
} );
