'use strict';

const { defineConfig } = require( 'eslint/config' );

module.exports = defineConfig( {
	name: 'wikimedia/vue/es2023',
	extends: [ require( '../vue3/es2023' ) ]
} );
