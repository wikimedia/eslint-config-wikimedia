/* eslint-disable quote-props, quotes, indent */
const merge = require( './merge.js' );
const rules = {
  "rules": {
    "no-restricted-properties": [
      "error",
      {
        "property": "padEnd",
        "message": "Unsupported method String.prototype.padEnd requires ES2017."
      },
      {
        "property": "padStart",
        "message": "Unsupported method String.prototype.padStart requires ES2017."
      },
      {
        "object": "Object",
        "property": "entries",
        "message": "Unsupported method Object.entries requires ES2017."
      },
      {
        "object": "Object",
        "property": "getOwnPropertyDescriptors",
        "message": "Unsupported method Object.getOwnPropertyDescriptors requires ES2017."
      },
      {
        "object": "Object",
        "property": "values",
        "message": "Unsupported method Object.values requires ES2017."
      }
    ]
  }
};
module.exports = merge( rules, require( './not-es2017.js' ) );
