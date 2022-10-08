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
	// Valid: es-x/no-array-from
	Array.from();
	// Valid: es-x/no-array-of
	Array.of();
	// Valid: es-x/no-math-acosh
	Math.acosh();
	// Valid: es-x/no-math-asinh
	Math.asinh();
	// Valid: es-x/no-math-atanh
	Math.atanh();
	// Valid: es-x/no-math-cbrt
	Math.cbrt();
	// Valid: es-x/no-math-clz32
	Math.clz32();
	// Valid: es-x/no-math-cosh
	Math.cosh();
	// Valid: es-x/no-math-expm1
	Math.expm1();
	// Valid: es-x/no-math-fround
	Math.fround();
	// Valid: es-x/no-math-hypot
	Math.hypot();
	// Valid: es-x/no-math-imul
	Math.imul();
	// Valid: es-x/no-math-log10
	Math.log10();
	// Valid: es-x/no-math-log1p
	Math.log1p();
	// Valid: es-x/no-math-log2
	Math.log2();
	// Valid: es-x/no-math-sign
	Math.sign();
	// Valid: es-x/no-math-sinh
	Math.sinh();
	// Valid: es-x/no-math-tanh
	Math.tanh();
	// Valid: es-x/no-math-trunc
	Math.trunc();
	// Valid: es-x/no-number-epsilon
	Number.EPSILON.toString();
	// Valid: es-x/no-number-isfinite
	Number.isFinite();
	// Valid: es-x/no-number-isinteger
	Number.isInteger();
	// Valid: es-x/no-number-isnan
	Number.isNaN();
	// Valid: es-x/no-number-issafeinteger
	Number.isSafeInteger();
	// Valid: es-x/no-number-maxsafeinteger
	Number.MAX_SAFE_INTEGER.toString();
	// Valid: es-x/no-number-minsafeinteger
	Number.MIN_SAFE_INTEGER.toString();
	// Valid: es-x/no-number-parsefloat
	Number.parseFloat();
	// Valid: es-x/no-number-parseint
	Number.parseInt();
	// Valid: es-x/no-object-assign
	Object.assign();
	// Valid: es-x/no-object-getownpropertysymbols
	Object.getOwnPropertySymbols();
	// Valid: es-x/no-object-is
	Object.is();
	// Valid: es-x/no-string-fromcodepoint
	String.fromCodePoint();
	// Valid: es-x/no-string-raw
	String.raw();

	// Symbol.prototype.descrition is disabled, but conflicts
	// with many plain object properties.
	// Off: es-x/no-symbol-prototype-description
	// eslint-disable-next-line no-unused-expressions
	node.description;
}() );
