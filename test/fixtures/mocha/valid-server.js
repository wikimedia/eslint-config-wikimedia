'use strict';

function foo() {}

// Local rules
// Off: mocha/no-mocha-arrows, mocha/no-skipped-tests
describe.skip( () => {
	// Off: mocha/no-hooks-for-single-case
	beforeEach( () => {
	} );
	// Off: mocha/no-skipped-tests
	it.skip( () => {
	} );
} );

// Recommended
// Off: mocha/valid-suite-description
describe( 'Suite', function () {
	// Off: mocha/no-hooks
	it( 'title', async function () {
		return 1;
	} );

	// Off: mocha/valid-test-description
	it( 'async', async function ( done ) {
		// Off: mocha/no-return-from-async
		return done();
	} );

	// Off: mocha/no-synchronous-tests
	it( 'test', function () {
		return;
	} );

} );

// Off: mocha/prefer-arrow-callback
foo( function ( a ) {
	return a;
} );
