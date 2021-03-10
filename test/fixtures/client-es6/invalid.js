/* eslint-env browser */

( function () {
	// not-es6
	// eslint-disable-next-line no-restricted-syntax
	[].includes();
	// eslint-disable-next-line es/no-object-entries
	Object.entries();
	// eslint-disable-next-line es/no-object-getownpropertydescriptors
	Object.getOwnPropertyDescriptors();
	// eslint-disable-next-line es/no-object-values
	Object.values();

	// not-es2016
	// eslint-disable-next-line no-restricted-properties
	''.padStart();

	// not-es2017 introduces no rules

	// not-es2018
	// eslint-disable-next-line no-restricted-properties
	''.trimEnd();
	// eslint-disable-next-line es/no-object-fromentries
	Object.fromEntries();

	// es2020 rules don't fail in ES6, tested in server/invalid.js instead
	// <!-- eslint-disable-next-line es/no-bigint -->
	// <!-- eslint-disable-next-line es/no-global-this -->
	// <!-- eslint-disable-next-line es/no-promise-all-settled -->
	// <!-- eslint-disable-next-line es/no-promise-any -->

	// not-es2021
	// Nothing yet

}() );
