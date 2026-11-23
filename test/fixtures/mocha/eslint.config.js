'use strict';

const { defineConfig } = require( 'eslint/config' );
const wikimedia = require( '../../../flat' );

module.exports = defineConfig(
	wikimedia( 'mocha' ),
	{
		rules: {
			'no-unused-vars': 'off'
		}
	},
	{
		files: [ '**/*-client.js' ],
		extends: [ wikimedia( 'client' ) ]
	},
	{
		files: [ '**/*-server.js' ],
		extends: [ wikimedia( 'server' ) ]
	}
);
