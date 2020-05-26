'use strict';

( function ( global ) {
	// eslint-disable-next-line no-useless-computed-key
	const foo = { [ 'a' ]: 'b' };

	// eslint-disable-next-line no-new-require, new-cap
	global.bar = new require( 'events' );

	// eslint-disable-next-line no-misleading-character-class
	/^[👍]$/.test( '👍' );

	// eslint-disable-next-line prefer-const
	let f = ( p ) => p;

	// eslint-disable-next-line arrow-body-style, arrow-parens, arrow-spacing
	Object.keys( foo ).map( x=> {
		return x + 1;
	} );

	// eslint-disable-next-line no-useless-concat, no-unused-expressions
	'a' + 'b';

	// eslint-disable-next-line template-curly-spacing, no-unused-expressions
	`${ global.foo }`;

	// eslint-disable-next-line node/no-deprecated-api
	const b = new Buffer( 1 );

	// eslint-disable-next-line node/no-exports-assign
	exports = {};

	// eslint-disable-next-line node/no-missing-require
	require( 'missing' );

	const crypto = require( 'crypto' );
	// This depends on the Node version defined in package.engine
	// eslint-disable-next-line node/no-unsupported-features/node-builtins
	crypto.verify();

	// TODO: eslint-disable-next-line node/no-extraneous-require
	// TODO: eslint-disable-next-line node/no-unpublished-bin
	// TODO: eslint-disable-next-line node/process-exit-as-throw

	// not-es2018
	// eslint-disable-next-line no-restricted-properties
	''.trimEnd();

	// eslint-disable-next-line no-process-exit
	process.exit( 1 );

}( this ) );
