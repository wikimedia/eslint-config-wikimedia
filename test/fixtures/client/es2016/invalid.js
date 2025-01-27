// eslint-disable-next-line no-use-before-define,no-unused-vars
const c = new MyClass();

class MyClass {}

( function () {
	// not-es2016
	// eslint-disable-next-line es-x/no-string-prototype-padstart-padend
	''.padStart();

	// not-es2017 introduces no rules

	// not-es2018
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
