QUnit.module( 'Example' );

// Valid: qunit/require-expect
QUnit.test( '.foo()', function ( assert ) {
	var x = 'bar';
	// Valid: qunit/no-assert-equal
	assert.strictEqual( x, 'bar' );

	// Valid: qunit/no-negated-ok
	assert.notOk( x );
} );
