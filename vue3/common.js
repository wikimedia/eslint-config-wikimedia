'use strict';

const { defineConfig } = require( 'eslint/config' );
const vue = require( 'eslint-plugin-vue' );

module.exports = defineConfig( {
	name: 'wikimedia/vue3/common',
	files: [ '**/*.vue' ],
	extends: [
		vue.configs[ 'flat/recommended' ],
		require( '../vue/common' )
	],
	rules: {
		'vue/no-unsupported-features': [
			'error',
			{
				version: '3.5.13'
			}
		]
	}
} );
