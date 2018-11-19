/* eslint-env qunit */
QUnit.module( 'Example' );

// Rule: qunit/require-expect
QUnit.test( '.foo()', function ( assert ) {
	var x = 'bar';
	assert.strictEqual( x, 'bar' );

	assert.notOk( x );
} );
