'use strict';

const { defineConfig } = require( 'eslint/config' );

module.exports = defineConfig( {
	name: 'wikimedia/vue/es2016',
	extends: [ require( '../vue3/es2016' ) ]
} );
