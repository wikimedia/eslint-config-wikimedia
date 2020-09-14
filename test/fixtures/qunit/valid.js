QUnit.module( 'Example' );

// Valid: qunit/require-expect
QUnit.test( '.foo()', function ( assert ) {
	var x = 'bar',
		y = 'baz';

	// Valid: qunit/no-assert-equal
	assert.strictEqual( x, 'bar' );

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
