'use strict';

// Recommended
// eslint-disable-next-line mocha/no-async-describe
describe( 'async', async function () {
} );

describe( 'foo', function () {
	const foo = function () {};
	// eslint-disable-next-line mocha/no-setup-in-describe
	foo();

	// eslint-disable-next-line mocha/handle-done-callback, no-unused-vars
	it( 'async', function ( done ) {
		// done not called
	} );

	it( 'return-and-callback', function ( done ) {
		// eslint-disable-next-line mocha/no-return-and-callback
		return foo( done );
	} );

	before( function () {} );
	// eslint-disable-next-line mocha/no-sibling-hooks
	before( function () {} );

	// eslint-disable-next-line mocha/no-exclusive-tests
	it.only( 'only', function () {
		// eslint-disable-next-line mocha/no-nested-tests
		it( 'nested', function () {} );
	} );

	// eslint-disable-next-line mocha/no-pending-tests
	it( 'pending' );
} );

// TODO: This should also trigger mocha/no-global-tests?
it( 'global', function () {} );

// eslint-disable-next-line mocha/no-top-level-hooks
before( function () {} );

// TODO: This should also trigger mocha/max-top-level-suites?
// eslint-disable-next-line mocha/no-identical-title
describe( 'foo', function () {
	it( 'test', function () {} );
	// eslint-disable-next-line mocha/no-identical-title
	it( 'test', function () {} );
} );

// eslint-disable-next-line mocha/no-exports
module.exports = {};
