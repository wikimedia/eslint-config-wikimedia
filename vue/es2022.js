'use strict';

const { defineConfig } = require( 'eslint/config' );

module.exports = defineConfig( {
	name: 'wikimedia/vue/es2022',
	extends: [ require( '../vue3/es2022' ) ]
} );
