'use strict';

// Recommended
// eslint-disable-next-line mocha/no-async-describe
describe( 'async', async () => {
} );

describe( 'foo', () => {
	const foo = function () {};
	// eslint-disable-next-line mocha/no-setup-in-describe
	foo();

	// eslint-disable-next-line mocha/handle-done-callback, no-unused-vars
	it( 'async', ( done ) => {
		// done not called
	} );

	it( 'return-and-callback', ( done ) => {
		foo();
		// eslint-disable-next-line mocha/no-return-and-callback
		return foo( done );
	} );

	before( () => {} );
	// eslint-disable-next-line mocha/no-sibling-hooks
	before( () => {} );

	// eslint-disable-next-line mocha/no-exclusive-tests
	it.only( 'only', () => {
		// eslint-disable-next-line mocha/no-nested-tests
		it( 'nested', () => {} );
	} );

	// eslint-disable-next-line mocha/no-pending-tests
	it( 'pending' );
} );

// TODO: This should also trigger mocha/no-global-tests?
it( 'global', () => {} );

// eslint-disable-next-line mocha/no-top-level-hooks
before( () => {} );

// TODO: This should also trigger mocha/max-top-level-suites?
// eslint-disable-next-line mocha/no-identical-title
describe( 'foo', () => {
	it( 'test', () => {} );
	// eslint-disable-next-line mocha/no-identical-title
	it( 'test', () => {} );
} );

// eslint-disable-next-line mocha/no-empty-description
describe( '', () => { } );

// eslint-disable-next-line mocha/no-exports
module.exports = {};
