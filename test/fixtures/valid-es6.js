/* eslint-env es6 */

( function ( global ) {
	const a = 4;
	let b = 2;

	// Rule: arrow-parens
	global.then( ( data ) => { return Math.pow( data, 2 ); } );

	// Rule: arrow-parens
	if ( a >= b ) {
		b++;
	} else {
		b--;
	}

	// Rule: no-misleading-character-class
	/^[👍]$/u.test( '👍' );

}( this ) );
