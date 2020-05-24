#!/usr/bin/env node
// Rule: node/shebang

// Rule: strict
'use strict';

( function ( global ) {
	// Rule: prefer-const
	const a = 4;

	// Rule: arrow-body-style
	// Rule: arrow-parens
	// Rule: arrow-spacing
	global.then( ( data ) => Math.pow( data, 2 ) );
	global.then( ( data ) => ( { d: data } ) );

	// Rule: one-var
	// Rule: vars-on-top
	let b = 2;

	if ( a >= b ) {
		b++;
	} else {
		b--;
	}

	// Rule: no-useless-concat
	// eslint-disable-next-line no-unused-expressions
	'ab';

	// Rule: template-curly-spacing
	// eslint-disable-next-line no-unused-expressions
	`${global.foo}`;

	// These rules are disabled because they are already covered by our
	// language rules, or the parser version.
	// Rule: node/no-unsupported-features/es-builtins
	// Rule: node/no-unsupported-features/es-syntax

	// Disabled due to https://github.com/mysticatea/eslint-plugin-node/issues/77
	// Rule: node/no-unpublished-require

}( this ) );
