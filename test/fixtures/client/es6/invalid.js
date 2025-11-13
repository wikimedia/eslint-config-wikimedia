// eslint-disable-next-line no-use-before-define
const c = new MyClass();

class MyClass {}

( function () {
	// not-es6
	// eslint-disable-next-line es-x/no-array-prototype-includes
	[].includes( c );
	// eslint-disable-next-line es-x/no-object-entries
	Object.entries();
	// eslint-disable-next-line es-x/no-object-getownpropertydescriptors
	Object.getOwnPropertyDescriptors();
	// eslint-disable-next-line es-x/no-object-values
	Object.values();

	// not-es2016
	// The following features already trigger parser errors
	// <!-- eslint-disable-next-line es-x/no-exponential-operators -->
	// eslint-disable-next-line es-x/no-string-prototype-padstart-padend
	''.padStart();

	// not-es2017 introduces no rules

	// not-es2018
	// eslint-disable-next-line es-x/no-array-prototype-flat
	[].flat();
	// eslint-disable-next-line es-x/no-array-prototype-flat
	[].flatMap();

	// eslint-disable-next-line es-x/no-string-prototype-trimstart-trimend
	''.trimEnd();
	// eslint-disable-next-line es-x/no-object-fromentries
	Object.fromEntries();

	// es2020 rules don't fail in ES6, tested in server/invalid.js instead
	// <!-- eslint-disable-next-line es-x/no-bigint -->
	// <!-- eslint-disable-next-line es-x/no-global-this -->
	// <!-- eslint-disable-next-line es-x/no-promise-all-settled -->
	// <!-- eslint-disable-next-line es-x/no-promise-any -->

	// not-es2021
	// Nothing yet

}() );
