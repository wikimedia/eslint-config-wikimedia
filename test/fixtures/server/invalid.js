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
	Object.keys( foo ).map( x=> x + 1 );

	// eslint-disable-next-line prefer-arrow-callback
	f( function ( x ) {
		return x + 1;
	} );

	f( ( x ) =>
		// eslint-disable-next-line implicit-arrow-linebreak
		x + 1
	);

	// eslint-disable-next-line no-useless-concat, no-unused-expressions
	'a' + 'b';

	// eslint-disable-next-line template-curly-spacing, no-unused-expressions
	`${global.foo}`;

	// eslint-disable-next-line arrow-body-style
	const promise = new Promise( () => {
		// eslint-disable-next-line no-promise-executor-return
		return 1;
	} );

	promise.then( () => {
		if ( foo ) {
			// eslint-disable-next-line unicorn/no-useless-promise-resolve-reject
			return Promise.reject( new Error( 'Err' ) );
		}
	} );

	async function * generator() {
		// eslint-disable-next-line unicorn/no-useless-promise-resolve-reject
		yield Promise.resolve( 3 );
	}

	// eslint-disable-next-line n/no-deprecated-api
	const b = new Buffer( 1 );

	// eslint-disable-next-line n/no-exports-assign
	exports = {};

	// eslint-disable-next-line n/no-missing-require
	require( 'missing' );

	// New in Node 19, invalid per our our Node 18+ requirement
	// eslint-disable-next-line n/no-unsupported-features/node-builtins
	const c = URL.canParse( 'https://example.test/' );

	// TODO: <!-- eslint-disable-next-line n/no-extraneous-require -->
	// TODO: <!-- eslint-disable-next-line n/no-unpublished-bin -->
	// TODO: <!-- eslint-disable-next-line n/process-exit-as-throw -->

	// not-es2023
	// eslint-disable-next-line es-x/no-array-prototype-findlast-findlastindex
	[].findLast();

	// eslint-disable-next-line n/no-process-exit
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
