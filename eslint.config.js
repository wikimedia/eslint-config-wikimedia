'use strict';

const wikimedia = require( './flat' );

module.exports = [
	...wikimedia( 'server' ),
	...wikimedia( 'qunit' ).map( ( config ) => ( { files: [ 'test/**' ], ...config } ) ),
	// The flat config tests in test/test.js lint the fixtures.
	{ ignores: [ 'test/fixtures/' ] }
];
