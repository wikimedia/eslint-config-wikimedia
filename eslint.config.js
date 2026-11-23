'use strict';

const { defineConfig, globalIgnores } = require( 'eslint/config' );
const wikimedia = require( './flat' );

module.exports = defineConfig(
	wikimedia( 'server' ),
	{
		files: [ 'test/**' ],
		extends: [ wikimedia( 'qunit' ) ]
	},
	// The tests in test/test.js lint the fixtures.
	globalIgnores( [ 'test/fixtures/' ] )
);
