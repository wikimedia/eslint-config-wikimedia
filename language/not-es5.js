/* eslint-disable quote-props, quotes, indent */
const merge = require( './merge.js' );
const rules = {
  "rules": {
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
        "property": "entries",
        "message": "Unsupported method Array.prototype.entries requires ES6."
      },
      {
        "property": "fill",
        "message": "Unsupported method Array.prototype.fill requires ES6."
      },
      {
        "property": "findIndex",
        "message": "Unsupported method Array.prototype.findIndex requires ES6."
      },
      {
        "object": "String",
        "property": "fromCodePoint",
        "message": "Unsupported method String.fromCodePoint requires ES6."
      },
      {
        "object": "String",
        "property": "raw",
        "message": "Unsupported method String.raw requires ES6."
      },
      {
        "object": "Array",
        "property": "from",
        "message": "Unsupported method Array.from requires ES6."
      },
      {
        "object": "Array",
        "property": "of",
        "message": "Unsupported method Array.of requires ES6."
      },
      {
        "object": "Object",
        "property": "assign",
        "message": "Unsupported method Object.assign requires ES6."
      },
      {
        "object": "Object",
        "property": "getOwnPropertySymbols",
        "message": "Unsupported method Object.getOwnPropertySymbols requires ES6."
      },
      {
        "object": "Object",
        "property": "is",
        "message": "Unsupported method Object.is requires ES6."
      },
      {
        "object": "Number",
        "property": "isFinite",
        "message": "Unsupported method Number.isFinite requires ES6."
      },
      {
        "object": "Number",
        "property": "isInteger",
        "message": "Unsupported method Number.isInteger requires ES6."
      },
      {
        "object": "Number",
        "property": "isSafeInteger",
        "message": "Unsupported method Number.isSafeInteger requires ES6."
      },
      {
        "object": "Number",
        "property": "isNaN",
        "message": "Unsupported method Number.isNaN requires ES6."
      },
      {
        "object": "Number",
        "property": "parseFloat",
        "message": "Unsupported method Number.parseFloat requires ES6."
      },
      {
        "object": "Number",
        "property": "parseInt",
        "message": "Unsupported method Number.parseInt requires ES6."
      },
      {
        "object": "Number",
        "property": "EPSILON",
        "message": "Unsupported property Number.EPSILON requires ES6."
      },
      {
        "object": "Number",
        "property": "MIN_SAFE_INTEGER",
        "message": "Unsupported property Number.MIN_SAFE_INTEGER requires ES6."
      },
      {
        "object": "Number",
        "property": "MAX_SAFE_INTEGER",
        "message": "Unsupported property Number.MAX_SAFE_INTEGER requires ES6."
      },
      {
        "object": "Math",
        "property": "clz32",
        "message": "Unsupported method Math.clz32 requires ES6."
      },
      {
        "object": "Math",
        "property": "imul",
        "message": "Unsupported method Math.imul requires ES6."
      },
      {
        "object": "Math",
        "property": "sign",
        "message": "Unsupported method Math.sign requires ES6."
      },
      {
        "object": "Math",
        "property": "log10",
        "message": "Unsupported method Math.log10 requires ES6."
      },
      {
        "object": "Math",
        "property": "log2",
        "message": "Unsupported method Math.log2 requires ES6."
      },
      {
        "object": "Math",
        "property": "log1p",
        "message": "Unsupported method Math.log1p requires ES6."
      },
      {
        "object": "Math",
        "property": "expm1",
        "message": "Unsupported method Math.expm1 requires ES6."
      },
      {
        "object": "Math",
        "property": "cosh",
        "message": "Unsupported method Math.cosh requires ES6."
      },
      {
        "object": "Math",
        "property": "sinh",
        "message": "Unsupported method Math.sinh requires ES6."
      },
      {
        "object": "Math",
        "property": "tanh",
        "message": "Unsupported method Math.tanh requires ES6."
      },
      {
        "object": "Math",
        "property": "acosh",
        "message": "Unsupported method Math.acosh requires ES6."
      },
      {
        "object": "Math",
        "property": "asinh",
        "message": "Unsupported method Math.asinh requires ES6."
      },
      {
        "object": "Math",
        "property": "atanh",
        "message": "Unsupported method Math.atanh requires ES6."
      },
      {
        "object": "Math",
        "property": "trunc",
        "message": "Unsupported method Math.trunc requires ES6."
      },
      {
        "object": "Math",
        "property": "fround",
        "message": "Unsupported method Math.fround requires ES6."
      },
      {
        "object": "Math",
        "property": "cbrt",
        "message": "Unsupported method Math.cbrt requires ES6."
      },
      {
        "object": "Math",
        "property": "hypot",
        "message": "Unsupported method Math.hypot requires ES6."
      }
    ],
    "no-restricted-syntax": [
      "error",
      {
        "selector": "CallExpression[callee.type='MemberExpression'][callee.property.type='Identifier'][callee.property.name='includes']",
        "message": "Unsupported method String.prototype.includes requires ES6."
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

module.exports = merge( rules, require( './not-es6.js' ) );
