#!/usr/bin/env node
// Off: node/shebang
// Off: es-x/no-hashbang

// Valid: strict
'use strict';

( function ( global ) {
	// Valid: prefer-const
	const a = 4;

	// Valid: arrow-parens
	// Valid: arrow-spacing
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

	// Valid: template-curly-spacing
	global.template = `${ global.foo }`;

	// ES6
	// Valid: no-restricted-syntax
	[].includes();

	// ES2016
	// Valid: no-restricted-properties
	''.padStart();

	// ES2017 (no rules in not-es2017)

	// These rules are disabled because they are already covered by our
	// language rules, or the parser version.
	// Off: node/no-unsupported-features/es-builtins
	// Off: node/no-unsupported-features/es-syntax

	// Disabled due to https://github.com/mysticatea/eslint-plugin-node/issues/77
	// Off: node/no-unpublished-require

	// Off: node/no-extraneous-require

	// ES 019
	// Symbol.prototype.descrition is disabled, but conflicts
	// with many plain object properties.
	// Off: es-x/no-symbol-prototype-description
	global.desc = a.description;

}( this ) );
