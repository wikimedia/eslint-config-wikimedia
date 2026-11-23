'use strict';

const { defineConfig } = require( 'eslint/config' );

module.exports = defineConfig( {
	name: 'wikimedia/vue/es2018',
	extends: [ require( '../vue3/es2018' ) ]
} );
