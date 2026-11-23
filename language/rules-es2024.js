'use strict';

const { defineConfig } = require( 'eslint/config' );

module.exports = defineConfig( {
	name: 'wikimedia/language/rules-es2024',
	extends: [ require( './rules-es2023' ) ]
} );
