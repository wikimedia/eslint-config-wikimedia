( function ( global ) {
	const a = 4;

	// Rule: arrow-parens
	global.then( ( data ) => {
		return Math.pow( data, 2 );
	} );

	// Rule: one-var
	// Rule: vars-on-top
	let b = 2;

	// Rule: template-curly-spacing
	let c = `a${ b }c`;

	// Rule: arrow-parens
	if ( a >= b && c !== '' ) {
		b++;
	} else {
		b--;
	}

}( this ) );
