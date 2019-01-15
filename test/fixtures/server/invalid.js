( function ( global ) {
	// eslint-disable-next-line no-useless-computed-key
	const foo = { [ 'a' ]: 'b' };

	// eslint-disable-next-line template-curly-spacing
	const baz = `${foo}`;

	// eslint-disable-next-line arrow-parens, no-constant-condition, no-unused-vars
	if ( a => 2 ) {
		global.foo( foo, baz );
	}

	// eslint-disable-next-line no-new-require, new-cap
	global.bar = new require( 'events' );

	// eslint-disable-next-line no-misleading-character-class
	/^[👍]$/.test( '👍' );

}( this ) );
