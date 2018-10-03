/* eslint-env es6 */

( function ( global ) {
	// eslint-disable-next-line no-useless-computed-key
	var foo = { [ 'a' ]: 'b' };

	// eslint-disable-next-line arrow-parens, no-constant-condition, no-unused-vars
	if ( a => 2 ) {
		global.foo( foo );
	}

	// eslint-disable-next-line no-misleading-character-class
	/^[👍]$/.test( '👍' );

}( this ) );
