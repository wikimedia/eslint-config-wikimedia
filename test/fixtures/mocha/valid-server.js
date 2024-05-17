'use strict';

function foo() {}

// Local rules
// Off: mocha/no-mocha-arrows, mocha/no-skipped-tests
describe.skip( () => {
	// Off: mocha/consistent-spacing-between-blocks
	// Off: mocha/no-hooks-for-single-case
	beforeEach( () => {
	} );
	// Off: mocha/no-skipped-tests
	it.skip( () => {
	} );
} );

// Recommended
// Off: mocha/valid-suite-description
describe( 'Suite', () => {
	// Off: mocha/no-hooks
	it( 'title', async () => 1 );

	// Off: mocha/valid-test-description
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
