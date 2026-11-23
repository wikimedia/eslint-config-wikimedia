'use strict';

const { defineConfig } = require( 'eslint/config' );

module.exports = defineConfig( {
	name: 'wikimedia/vue/es6',
	extends: [ require( '../vue3/es6' ) ]
} );
