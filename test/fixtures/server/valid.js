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
		// Global: DataView
		DataView,
		// Global: Float32Array
		Float32Array,
		// Global: Float64Array
		Float64Array,
		// Global: Int16Array
		Int16Array,
		// Global: Int32Array
		Int32Array,
		// Global: Int8Array
		Int8Array,
		// Global: Map
		Map,
		// Global: Promise
		Promise,
		// Global: Proxy
		Proxy,
		// Global: Reflect
		Reflect,
		// Global: Set
		Set,
		// Global: SharedArrayBuffer
		SharedArrayBuffer,
		// Global: Symbol
		Symbol,
		// Global: Uint16Array
		Uint16Array,
		// Global: Uint32Array
		Uint32Array,
		// Global: Uint8Array
		Uint8Array,
		// Global: Uint8ClampedArray
		Uint8ClampedArray,
		// Global: WeakMap
		WeakMap,
		// Global: WeakSet
		WeakSet,
		// Global: globalThis
		// Can't assert due to es-x/no-global-this
		// globalThis,
		// Global: Intl
		Intl,
		// Global: TextDecoder
		TextDecoder,
		// Global: TextEncoder
		TextEncoder,
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
		// Global: Buffer
		Buffer,
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
