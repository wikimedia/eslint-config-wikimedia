'use strict';

const { defineConfig } = require( 'eslint/config' );

module.exports = defineConfig( {
	name: 'wikimedia/mediawiki',
	extends: [ require( './mediawiki/common' ) ]
} );
