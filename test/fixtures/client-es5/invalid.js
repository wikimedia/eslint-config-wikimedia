/* eslint-env browser */

( function () {
	var node;

	// eslint-disable-next-line no-restricted-properties
	document.appendChild( node.parentElement );

	// not-es5
	// eslint-disable-next-line no-restricted-properties
	''.codePointAt();
	// eslint-disable-next-line no-restricted-syntax
	[].keys();
	// eslint-disable-next-line no-restricted-syntax
	[].entries();
	// eslint-disable-next-line es-x/no-array-from
	Array.from();
	// eslint-disable-next-line es-x/no-array-of
	Array.of();
	// eslint-disable-next-line es-x/no-math-acosh
	Math.acosh();
	// eslint-disable-next-line es-x/no-math-asinh
	Math.asinh();
	// eslint-disable-next-line es-x/no-math-atanh
	Math.atanh();
	// eslint-disable-next-line es-x/no-math-cbrt
	Math.cbrt();
	// eslint-disable-next-line es-x/no-math-clz32
	Math.clz32();
	// eslint-disable-next-line es-x/no-math-cosh
	Math.cosh();
	// eslint-disable-next-line es-x/no-math-expm1
	Math.expm1();
	// eslint-disable-next-line es-x/no-math-fround
	Math.fround();
	// eslint-disable-next-line es-x/no-math-hypot
	Math.hypot();
	// eslint-disable-next-line es-x/no-math-imul
	Math.imul();
	// eslint-disable-next-line es-x/no-math-log10
	Math.log10();
	// eslint-disable-next-line es-x/no-math-log1p
	Math.log1p();
	// eslint-disable-next-line es-x/no-math-log2
	Math.log2();
	// eslint-disable-next-line es-x/no-math-sign
	Math.sign();
	// eslint-disable-next-line es-x/no-math-sinh
	Math.sinh();
	// eslint-disable-next-line es-x/no-math-tanh
	Math.tanh();
	// eslint-disable-next-line es-x/no-math-trunc
	Math.trunc();
	// eslint-disable-next-line es-x/no-number-epsilon
	Number.EPSILON.toString();
	// eslint-disable-next-line es-x/no-number-isfinite
	Number.isFinite();
	// eslint-disable-next-line es-x/no-number-isinteger
	Number.isInteger();
	// eslint-disable-next-line es-x/no-number-isnan
	Number.isNaN();
	// eslint-disable-next-line es-x/no-number-issafeinteger
	Number.isSafeInteger();
	// eslint-disable-next-line es-x/no-number-maxsafeinteger
	Number.MAX_SAFE_INTEGER.toString();
	// eslint-disable-next-line es-x/no-number-minsafeinteger
	Number.MIN_SAFE_INTEGER.toString();
	// eslint-disable-next-line es-x/no-number-parsefloat
	Number.parseFloat();
	// eslint-disable-next-line es-x/no-number-parseint
	Number.parseInt();
	// eslint-disable-next-line es-x/no-object-assign
	Object.assign();
	// eslint-disable-next-line es-x/no-object-getownpropertysymbols
	Object.getOwnPropertySymbols();
	// eslint-disable-next-line es-x/no-object-is
	Object.is();
	// eslint-disable-next-line es-x/no-string-fromcodepoint
	String.fromCodePoint();
	// eslint-disable-next-line es-x/no-string-raw
	String.raw();

	// not-es6
	// eslint-disable-next-line no-restricted-syntax
	[].includes();
	// eslint-disable-next-line es-x/no-object-entries
	Object.entries();
	// eslint-disable-next-line es-x/no-object-getownpropertydescriptors
	Object.getOwnPropertyDescriptors();
	// eslint-disable-next-line es-x/no-object-values
	Object.values();

	// not-es2016
	// eslint-disable-next-line no-restricted-properties
	''.padStart();

	// not-es2017 introduces no rules

	// not-es2018
	// eslint-disable-next-line no-restricted-properties
	''.trimEnd();
	// eslint-disable-next-line es-x/no-object-fromentries
	Object.fromEntries();

	// es2020 rules don't fail in ES5, tested in server/invalid.js instead
	// <!-- eslint-disable-next-line es-x/no-bigint -->
	// <!-- eslint-disable-next-line es-x/no-global-this -->
	// <!-- eslint-disable-next-line es-x/no-promise-all-settled -->
	// <!-- eslint-disable-next-line es-x/no-promise-any -->

	// not-es2021
	// Nothing yet

}() );
