QUnit.module( 'Example' );

// eslint-disable-next-line qunit/require-expect
QUnit.test( '.foo()', function ( assert ) {
	var x = 'bar';
	// eslint-disable-next-line qunit/no-assert-equal
	assert.equal( x, 'bar' );

	assert.expect( 3 );

	if ( !x ) {
		// eslint-disable-next-line qunit/no-early-return
		return;
	}

	// eslint-disable-next-line qunit/no-negated-ok
	assert.ok( !x );
} );
