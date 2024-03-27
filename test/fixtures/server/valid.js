#!/usr/bin/env node
// Off: n/shebang
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
	// Off: n/no-unsupported-features/es-builtins
	// Off: n/no-unsupported-features/es-syntax

	// Disabled due to https://github.com/mysticatea/eslint-plugin-n/issues/77
	// Off: n/no-unpublished-require

	// Off: n/no-extraneous-require

	// ES 019
	// Symbol.prototype.descrition is disabled, but conflicts
	// with many plain object properties.
	// Off: es-x/no-symbol-prototype-description
	global.desc = a.description;

	/* Globals */
	console.log(
		// Global: AggregateError
		// Can't assert due to es-x/no-promise-any
		// AggregateError,
		// Global: Array
		Array,
		// Global: ArrayBuffer
		ArrayBuffer,
		// Global: Atomics
		Atomics,
		// Global: BigInt
		// Can't assert due to es-x/no-bigint
		// BigInt,
		// Global: BigInt64Array
		// Can't assert due to es-x/no-bigint
		// BigInt64Array,
		// Global: BigUint64Array
		// Can't assert due to es-x/no-bigint
		// BigUint64Array,
		// Global: Boolean
		Boolean,
		// Global: Buffer
		Buffer,
		// Global: constructor
		constructor,
		// Global: DataView
		DataView,
		// Global: Date
		Date,
		// Global: decodeURI
		decodeURI,
		// Global: decodeURIComponent
		decodeURIComponent,
		// Global: encodeURI
		encodeURI,
		// Global: encodeURIComponent
		encodeURIComponent,
		// Global: Error
		Error,
		// Global: escape
		escape,
		// Global: eval
		// Can't assert due to no-eval
		// eval,
		// Global: EvalError
		EvalError,
		// Global: FinalizationRegistry
		// Can't assert due to es-x/no-weakrefs
		// FinalizationRegistry,
		// Global: Float32Array
		Float32Array,
		// Global: Float64Array
		Float64Array,
		// Global: Function
		Function,
		// Global: hasOwnProperty
		hasOwnProperty,
		// Global: Infinity
		Infinity,
		// Global: globalThis
		// Can't assert due to es-x/no-global-this
		// globalThis,
		// Global: Int16Array
		Int16Array,
		// Global: Int32Array
		Int32Array,
		// Global: Int8Array
		Int8Array,
		// Global: Intl
		Intl,
		// Global: isFinite
		isFinite,
		// Global: isNaN
		isNaN,
		// Global: isPrototypeOf
		isPrototypeOf,
		// Global: JSON
		JSON,
		// Global: Map
		Map,
		// Global: Math
		Math,
		// Global: NaN
		NaN,
		// Global: Number
		Number,
		// Global: Object
		Object,
		// Global: parseFloat
		parseFloat,
		// Global: parseInt
		parseInt,
		// Global: Promise
		Promise,
		// Global: propertyIsEnumerable
		propertyIsEnumerable,
		// Global: Proxy
		Proxy,
		// Global: RangeError
		RangeError,
		// Global: ReferenceError
		ReferenceError,
		// Global: Reflect
		Reflect,
		// Global: RegExp
		RegExp,
		// Global: Set
		Set,
		// Global: SharedArrayBuffer
		SharedArrayBuffer,
		// Global: String
		String,
		// Global: Symbol
		Symbol,
		// Global: SyntaxError
		SyntaxError,
		// Global: TextDecoder
		TextDecoder,
		// Global: TextEncoder
		TextEncoder,
		// Global: toLocaleString
		toLocaleString,
		// Global: toString
		toString,
		// Global: TypeError
		TypeError,
		// Global: Uint16Array
		Uint16Array,
		// Global: Uint32Array
		Uint32Array,
		// Global: Uint8Array
		Uint8Array,
		// Global: Uint8ClampedArray
		Uint8ClampedArray,
		// Global: undefined
		undefined,
		// Global: unescape
		unescape,
		// Global: URIError
		URIError,
		// Global: valueOf
		valueOf,
		// Global: WeakRef
		// Can't assert due to es-x/no-weakrefs
		// WeakRef,
		// Global: WeakMap
		WeakMap,
		// Global: WeakSet
		WeakSet,
		// Global: URL
		URL,
		// Global: URLSearchParams
		URLSearchParams,
		// Global: WebAssembly
		WebAssembly,
		// Global: clearInterval
		clearInterval,
		// Global: clearTimeout
		clearTimeout,
		// Global: console
		console,
		// Global: queueMicrotask
		// Can't assert due to n/no-unsupported-features/node-builtins
		// queueMicrotask,
		// Global: setInterval
		setInterval,
		// Global: setTimeout
		setTimeout,
		// Global: GLOBAL
		// Can't assert due to n/no-deprecated-api
		// GLOBAL,
		// Global: clearImmediate
		clearImmediate,
		// Global: global
		global,
		// Global: process
		process,
		// Global: root
		// Can't assert due to n/no-deprecated-api
		// root,
		// Global: setImmediate
		setImmediate,
		// Global: __dirname
		__dirname,
		// Global: __filename
		__filename,
		// Global: exports
		exports,
		// Global: module
		module,
		// Global: require
		require
	);

}( this ) );
