QUnit.module( 'Module', ( hooks ) => {

	hooks.beforeEach( ( assert ) => {
		assert.ok( true, 'beforeEach' );
	} );

	// Off: qunit/no-arrow-tests
	// Valid: qunit/require-expect
	QUnit.test( '.foo()', () => {
	} );

	QUnit.test( '.bar()', function ( assert ) {
		const x = 'bar',
			y = 'baz';

		// The following rules are superseded by qunit/no-loose-assertions,
		// so are turned off to avoid double errors.
		// Off: qunit/no-assert-equal
		// Off: qunit/no-negated-ok
		// Off: qunit/no-ok-equality

		// Valid: qunit/no-assert-equal
		assert.strictEqual( x, 'bar' );

		// Off: qunit/no-assert-equal-boolean
		assert.strictEqual( x, true );

		// Valid: qunit/no-negated-ok
		if ( x ) {
			// Off: qunit/no-conditional-assertions
			assert.true( x );
		}

		// Off: qunit/no-assert-logical-expression
		assert.true( x && y );
	} );

	// Valid: no-shadow
	// The variable name "hooks" can be shadowed (#532)
	QUnit.module( 'Nested module', ( hooks ) => {
		hooks.beforeEach( ( assert ) => {
			assert.ok( true, 'nested beforeEach' );
		} );
	} );

} );
