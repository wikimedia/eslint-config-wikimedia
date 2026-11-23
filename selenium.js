'use strict';

const { defineConfig } = require( 'eslint/config' );
const wdio = require( 'eslint-plugin-wdio' );
const { named } = require( './lib/utils' );

module.exports = defineConfig( {
	name: 'wikimedia/selenium',
	extends: [
		require( './server' ),
		require( './mocha' ),
		named( 'wdio/recommended', wdio.configs[ 'flat/recommended' ] )
	]
} );
