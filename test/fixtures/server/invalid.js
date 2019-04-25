( function ( global ) {
	// eslint-disable-next-line no-useless-computed-key
	const foo = { [ 'a' ]: 'b' };

	// eslint-disable-next-line arrow-parens, no-constant-condition, no-unused-vars
	if ( a => 2 ) {
		global.foo( foo );
	}

	// eslint-disable-next-line no-new-require, new-cap
	global.bar = new require( 'events' );

	// eslint-disable-next-line no-misleading-character-class
	/^[👍]$/.test( '👍' );

	// eslint-disable-next-line no-useless-concat, no-unused-expressions
	'a' + 'b';

	// eslint-disable-next-line prefer-template, no-unused-expressions
	'a' + global;
}( this ) );
