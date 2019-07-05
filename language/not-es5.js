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
