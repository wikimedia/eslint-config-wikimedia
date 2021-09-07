/* eslint-env browser */

( function () {
	let node;

	document.appendChild( node.parentElement );

	// In not-es5 but not in not-es6
	// Valid: no-restricted-properties
	''.codePointAt();
	// Valid: no-restricted-syntax
	[].keys();
	// Valid: no-restricted-syntax
	[].entries();
	// Valid: es/no-array-from
	Array.from();
	// Valid: es/no-array-of
	Array.of();
	// Valid: es/no-math-acosh
	Math.acosh();
	// Valid: es/no-math-asinh
	Math.asinh();
	// Valid: es/no-math-atanh
	Math.atanh();
	// Valid: es/no-math-cbrt
	Math.cbrt();
	// Valid: es/no-math-clz32
	Math.clz32();
	// Valid: es/no-math-cosh
	Math.cosh();
	// Valid: es/no-math-expm1
	Math.expm1();
	// Valid: es/no-math-fround
	Math.fround();
	// Valid: es/no-math-hypot
	Math.hypot();
	// Valid: es/no-math-imul
	Math.imul();
	// Valid: es/no-math-log10
	Math.log10();
	// Valid: es/no-math-log1p
	Math.log1p();
	// Valid: es/no-math-log2
	Math.log2();
	// Valid: es/no-math-sign
	Math.sign();
	// Valid: es/no-math-sinh
	Math.sinh();
	// Valid: es/no-math-tanh
	Math.tanh();
	// Valid: es/no-math-trunc
	Math.trunc();
	// Valid: es/no-number-epsilon
	Number.EPSILON.toString();
	// Valid: es/no-number-isfinite
	Number.isFinite();
	// Valid: es/no-number-isinteger
	Number.isInteger();
	// Valid: es/no-number-isnan
	Number.isNaN();
	// Valid: es/no-number-issafeinteger
	Number.isSafeInteger();
	// Valid: es/no-number-maxsafeinteger
	Number.MAX_SAFE_INTEGER.toString();
	// Valid: es/no-number-minsafeinteger
	Number.MIN_SAFE_INTEGER.toString();
	// Valid: es/no-number-parsefloat
	Number.parseFloat();
	// Valid: es/no-number-parseint
	Number.parseInt();
	// Valid: es/no-object-assign
	Object.assign();
	// Valid: es/no-object-getownpropertysymbols
	Object.getOwnPropertySymbols();
	// Valid: es/no-object-is
	Object.is();
	// Valid: es/no-string-fromcodepoint
	String.fromCodePoint();
	// Valid: es/no-string-raw
	String.raw();

}() );
