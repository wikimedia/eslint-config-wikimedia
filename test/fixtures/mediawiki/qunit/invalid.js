QUnit.module( 'example' );

QUnit.test( 'test', function ( assert ) {
	// eslint-disable-next-line compat/compat
	const data = navigator.getBattery();

	assert.strictEqual( data, 1024 );
} );
