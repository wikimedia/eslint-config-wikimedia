'use strict';

/* eslint-disable quote-props, quotes */
const merge = require( './merge' );
const rules = {
	"plugins": [ "es-x" ],
	"rules": {
		"es-x/no-array-from": "error",
		"es-x/no-array-of": "error",
		"es-x/no-math-acosh": "error",
		"es-x/no-math-asinh": "error",
		"es-x/no-math-atanh": "error",
		"es-x/no-math-cbrt": "error",
		"es-x/no-math-clz32": "error",
		"es-x/no-math-cosh": "error",
		"es-x/no-math-expm1": "error",
		"es-x/no-math-fround": "error",
		"es-x/no-math-hypot": "error",
		"es-x/no-math-imul": "error",
		"es-x/no-math-log10": "error",
		"es-x/no-math-log1p": "error",
		"es-x/no-math-log2": "error",
		"es-x/no-math-sign": "error",
		"es-x/no-math-sinh": "error",
		"es-x/no-math-tanh": "error",
		"es-x/no-math-trunc": "error",
		"es-x/no-number-epsilon": "error",
		"es-x/no-number-isfinite": "error",
		"es-x/no-number-isinteger": "error",
		"es-x/no-number-isnan": "error",
		"es-x/no-number-issafeinteger": "error",
		"es-x/no-number-maxsafeinteger": "error",
		"es-x/no-number-minsafeinteger": "error",
		"es-x/no-number-parsefloat": "error",
		"es-x/no-number-parseint": "error",
		"es-x/no-object-assign": "error",
		"es-x/no-object-getownpropertysymbols": "error",
		"es-x/no-object-is": "error",
		"es-x/no-string-fromcodepoint": "error",
		"es-x/no-string-raw": "error",
		"no-restricted-properties": [
			"error",
			{
				"property": "codePointAt",
				"message": "Unsupported method String.prototype.codePointAt requires ES6."
			},
			{
				"property": "endsWith",
				"message": "Unsupported method String.prototype.endsWith requires ES6."
			},
			{
				"property": "normalize",
				"message": "Unsupported method String.prototype.normalize requires ES6."
			},
			{
				"property": "repeat",
				"message": "Unsupported method String.prototype.repeat requires ES6."
			},
			{
				"property": "startsWith",
				"message": "Unsupported method String.prototype.startsWith requires ES6."
			},
			{
				"property": "copyWithin",
				"message": "Unsupported method Array.prototype.copyWithin requires ES6."
			},
			{
				"property": "fill",
				"message": "Unsupported method Array.prototype.fill requires ES6."
			},
			{
				"property": "findIndex",
				"message": "Unsupported method Array.prototype.findIndex requires ES6."
			}
		],
		"no-restricted-syntax": [
			"error",
			{
				"selector": "CallExpression[callee.type='MemberExpression'][callee.property.type='Identifier'][callee.property.name='includes']",
				"message": "Unsupported method String.prototype.includes requires ES6."
			},
			{
				"selector": "CallExpression[callee.type='MemberExpression'][callee.property.type='Identifier'][callee.property.name='entries'][callee.object.name!='Object']",
				"message": "Unsupported method Array.prototype.entries requires ES6."
			},
			{
				"selector": "CallExpression[callee.type='MemberExpression'][callee.property.type='Identifier'][callee.property.name='find'][arguments.length=1][arguments.0.type='FunctionExpression']",
				"message": "Unsupported method Array.prototype.find requires ES6."
			},
			{
				"selector": "CallExpression[callee.type='MemberExpression'][callee.property.type='Identifier'][callee.property.name='keys'][callee.object.name!='Object']",
				"message": "Unsupported method Array.prototype.keys requires ES6."
			},
			{
				"selector": "CallExpression[callee.type='MemberExpression'][callee.property.type='Identifier'][callee.property.name='values'][callee.object.name!='Object']",
				"message": "Unsupported method Array.prototype.values requires ES6."
			}
		]
	}
};

module.exports = merge( rules, require( './not-es6' ) );
