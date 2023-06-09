/* eslint-disable strict */

// eslint-disable-next-line default-param-last
( function ( defaultParam = 0, global ) {
	// eslint-disable-next-line no-useless-computed-key
	const foo = { [ 'a' ]: 'b' };

	// eslint-disable-next-line no-var
	var bar = 'baz';

	// eslint-disable-next-line no-new-require, new-cap
	global.bar = new require( 'events' );

	// eslint-disable-next-line no-misleading-character-class
	/^[👍]$/.test( '👍' );

	// eslint-disable-next-line prefer-const
	let f = ( p ) => p;

	// eslint-disable-next-line unicorn/prefer-includes
	if ( 'abc'.indexOf( 'foo' ) !== -1 ) {
		return;
	}

	// eslint-disable-next-line unicorn/no-useless-fallback-in-spread
	const object = { ... ( foo || {} ) };

	// eslint-disable-next-line arrow-parens, arrow-spacing
	Object.keys( foo ).map( x=> {
		return x + 1;
	} );

	// eslint-disable-next-line no-useless-concat, no-unused-expressions
	'a' + 'b';

	// eslint-disable-next-line template-curly-spacing, no-unused-expressions
	`${ global.foo }`;

	const promise = new Promise( () => {
		// eslint-disable-next-line no-promise-executor-return
		return 1;
	} );

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
	// eslint-disable-next-line es-x/no-string-prototype-trimstart-trimend
	''.trimEnd();

	// not-es2019
	// eslint-disable-next-line es-x/no-string-prototype-matchall
	''.matchAll( /foo/ );

	// not-es2019
	// eslint-disable-next-line es-x/no-bigint
	const c = BigInt( 100 );

	// not-es2019
	// eslint-disable-next-line es-x/no-promise-all-settled
	Promise.allSettled( [] );

	// not-es2019
	// eslint-disable-next-line es-x/no-global-this, no-unused-expressions
	globalThis === c;

	// not-es2020
	// eslint-disable-next-line es-x/no-string-prototype-replaceall
	'abc'.replaceAll( 'a', 'x' );
	// eslint-disable-next-line es-x/no-promise-any
	Promise.any( [] );

	// not-es2021
	// Nothing yet

	// eslint-disable-next-line no-process-exit
	process.exit( 1 );

}( this ) );

class A {
	constructor( a ) {
		this.a = a;
		// eslint-disable-next-line no-constructor-return
		return a;
	}
	// eslint-disable-next-line lines-between-class-members
	foo() {}
}
