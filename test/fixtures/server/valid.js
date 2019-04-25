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

	// Rule: no-useless-concat
	// eslint-disable-next-line no-unused-expressions
	'ab';

	// Rule: prefer-template
	// eslint-disable-next-line no-unused-expressions
	`a${global}`;

	// Rule: template-curly-spacing
	// eslint-disable-next-line no-unused-expressions
	`${global.foo}`;
}( this ) );
