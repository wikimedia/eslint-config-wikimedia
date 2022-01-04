QUnit.module( 'Example' );

// Local rules
// eslint-disable-next-line qunit/require-expect
QUnit.test( '.foo()', function ( assert ) {
	const x = 'bar';

	// eslint-disable-next-line qunit/no-loose-assertions
	assert.equal( x, 'bar' );

	// eslint-disable-next-line qunit/no-loose-assertions
	assert.notEqual( x, 'bar' );

	assert.expect( 3 );

	if ( !x ) {
		// eslint-disable-next-line qunit/no-early-return
		return;
	}

	// eslint-disable-next-line qunit/no-loose-assertions
	assert.ok( !x );

	// eslint-disable-next-line qunit/no-loose-assertions
	assert.notOk( x );
} );

// Recommended
// eslint-disable-next-line qunit/no-identical-names, qunit/resolve-async
QUnit.test( '.foo()', ( assert ) => {
	const done = assert.async();

	// eslint-disable-next-line qunit/assert-args
	assert.true( 'result', 'message', 'extra' );

	// eslint-disable-next-line qunit/literal-compare-order
	assert.strictEqual( 'literal', done );

	while ( false ) {
		// eslint-disable-next-line qunit/no-async-in-loops
		assert.async();
	}

	// eslint-disable-next-line qunit/no-compare-relation-boolean
	assert.strictEqual( done > 3, true );

	// eslint-disable-next-line qunit/no-throws-string
	assert.throws( function () {
	}, 'error message', 'An error should have been thrown' );

	// eslint-disable-next-line qunit/require-object-in-propequal
	assert.propEqual( done, 'foo' );
} );

// eslint-disable-next-line qunit/no-commented-tests
// QUnit.test( '.bar()', function ( assert ) {} );

// eslint-disable-next-line qunit/no-only
QUnit.module.only( '.foo()', function () {} );

// eslint-disable-next-line qunit/no-reassign-log-callbacks
QUnit.log = function () {};

// eslint-disable-next-line qunit/no-reset
QUnit.reset();

// eslint-disable-next-line qunit/no-init
QUnit.init();

// eslint-disable-next-line qunit/no-jsdump
QUnit.jsDump( {} );

// eslint-disable-next-line qunit/no-async-test, qunit/no-test-expect-argument, qunit/require-expect
QUnit.asyncTest( 'Asynchronous test', 3, function () {
	// eslint-disable-next-line qunit/no-qunit-start-in-tests
	QUnit.start();

	// eslint-disable-next-line qunit/no-qunit-stop
	QUnit.stop();

	// eslint-disable-next-line qunit/no-global-stop-start
	start();

	// eslint-disable-next-line qunit/no-global-expect
	expect( 1 );

	// eslint-disable-next-line qunit/no-global-assertions
	strictEqual( 3, 4 );
} );

// eslint-disable-next-line qunit/no-async-module-callbacks
QUnit.module( 'An async module', async function () {
	QUnit.test( 'a passing test', function ( assert ) {
		assert.true( true );
	} );

	await Promise.resolve();

	QUnit.test( 'another passing test', function ( assert ) {
		assert.true( true );
	} );
} );

QUnit.module( 'outer module', function ( hooks ) {
	QUnit.module( 'inner module', function () {
		// eslint-disable-next-line qunit/no-hooks-from-ancestor-modules
		hooks.beforeEach( function () {} );
	} );
} );

QUnit.test( 'Parent', function () {
	// eslint-disable-next-line qunit/no-nested-tests
	QUnit.test( 'Child', function () {} );
} );

// eslint-disable-next-line qunit/no-qunit-push
QUnit.push( 'result', 'actual', 'expected', 'message' );

// eslint-disable-next-line qunit/no-global-module-test
module( 'global module' );

QUnit.module( 'Example 2', {
	// eslint-disable-next-line qunit/no-setup-teardown
	setup: function () {},
	// eslint-disable-next-line qunit/no-setup-teardown
	teardown: function () {}
} );
