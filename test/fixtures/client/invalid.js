/* eslint-env browser */

( function () {

	// eslint-disable-next-line no-alert
	window.alert( name );

	// eslint-disable-next-line no-console
	console.log( name );

	// eslint-disable-next-line no-implied-eval
	setTimeout( name + '();' );

	// not-es5
	// eslint-disable-next-line no-restricted-properties
	''.codePointAt();
	// eslint-disable-next-line no-restricted-syntax
	[].keys();

	// not-es6
	// eslint-disable-next-line no-restricted-syntax
	[].includes();

	// not-es2016
	// eslint-disable-next-line no-restricted-properties
	''.padStart();

	// not-es2017 introduces no rules

	// not-es2018
	// eslint-disable-next-line no-restricted-properties
	''.trimEnd();

	// not-es2019
	// eslint-disable-next-line no-restricted-properties
	''.matchAll( /foo/ );

}() );
