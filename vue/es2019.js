'use strict';

const { defineConfig } = require( 'eslint/config' );

module.exports = defineConfig( {
	name: 'wikimedia/vue/es2019',
	extends: [ require( '../vue3/es2019' ) ]
} );
