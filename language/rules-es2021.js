'use strict';

const { defineConfig } = require( 'eslint/config' );

module.exports = defineConfig( {
	name: 'wikimedia/language/rules-es2021',
	extends: [ require( './rules-es2020' ) ]
} );
