( function ( global ) {
	const a = 4;

	// Rule: arrow-parens
	global.then( ( data ) => {
		return Math.pow( data, 2 );
	} );

	// Rule: one-var
	// Rule: vars-on-top
	let b = 2;

	// Rule: arrow-parens
	// Rule: prefer-const
	if ( a >= b ) {
		b++;
	} else {
		b--;
	}

}( this ) );
