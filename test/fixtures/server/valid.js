#!/usr/bin/env node
// Off: node/shebang

// Valid: strict
'use strict';

( function ( global ) {
	// Off: prefer-const
	const a = 4;

	// Off: arrow-parens
	// Off: arrow-spacing
	global.then( ( data ) => Math.pow( data, 2 ) );
	global.then( ( data ) => ( { d: data } ) );

	// Off: one-var
	// Off: vars-on-top
	let b = 2;

	if ( a >= b ) {
		b++;
	} else {
		b--;
	}

	// Off: no-useless-concat
	// eslint-disable-next-line no-unused-expressions
	'ab';

	// Off: template-curly-spacing
	// eslint-disable-next-line no-unused-expressions
	`${global.foo}`;

	// ES6
	// Off: no-restricted-syntax
	[].includes();

	// ES2016
	// Off: no-restricted-properties
	''.padStart();

	// ES2017 (no rules in not-es2017)

	// These rules are disabled because they are already covered by our
	// language rules, or the parser version.
	// Off: node/no-unsupported-features/es-builtins
	// Off: node/no-unsupported-features/es-syntax

	// Disabled due to https://github.com/mysticatea/eslint-plugin-node/issues/77
	// Off: node/no-unpublished-require

	// Off: node/no-extraneous-require

}( this ) );
