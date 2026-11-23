'use strict';

function foo() {}

// Local rules
// Off: mocha/no-mocha-arrows
// Off: mocha/no-pending-tests
describe.skip( 'skipped', () => {
	// Off: mocha/consistent-spacing-between-blocks
	// Off: mocha/no-hooks-for-single-case
	beforeEach( () => {
	} );
	it.skip( 'skipped', () => {
	} );
} );

// Recommended
// Off: mocha/valid-suite-title
describe( 'Suite', () => {
	// Off: mocha/no-hooks
	it( 'title', async () => 1 );

	// Off: mocha/valid-test-title
	it( 'async', async ( done ) => {
		foo();
		// Off: mocha/no-return-from-async
		return done();
	} );

	// Off: mocha/no-synchronous-tests
	it( 'test', () => {
		foo();
	} );

} );

// Off: mocha/prefer-arrow-callback
foo( ( a ) => a );
