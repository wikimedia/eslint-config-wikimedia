QUnit.module( 'Example' );

// Off: qunit/no-arrow-tests
// Valid: qunit/require-expect
QUnit.test( '.foo()', ( assert ) => {
	const x = 'bar',
		y = 'baz';

	// Valid: qunit/no-assert-equal
	assert.strictEqual( x, 'bar' );

	// Off: qunit/no-assert-equal-boolean
	assert.strictEqual( x, true );

	// Valid: qunit/no-negated-ok
	assert.notOk( x );

	// Valid: qunit/no-negated-ok
	if ( x ) {
		// Off: qunit/no-conditional-assertions
		assert.ok( x );
	}

	// Off: qunit/no-assert-logical-expression
	assert.ok( x && y );
} );
