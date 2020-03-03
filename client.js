/* eslint-disable quote-props, quotes, indent */
const merge = require( './language/merge.js' );
const rules = {
  "extends": [
    "./common.json",
    "./language/es5.json"
  ],
  "env": {
    "browser": true
  },
  "rules": {
    "no-alert": "error",
    "no-console": "error",
    "no-implied-eval": "error",
    "no-restricted-properties": [
      "error",
      {
        "property": "parentElement",
        "message": "Prefer parentNode to parentElement as Node.parentElement is not supported by IE11."
      }
    ]
  }
};
// no-restricted-properties from not-es5 is overwritten by local value here,
// so use merge to fix this.
// If another language config is loaded later it will overwrite this, but the
// local rule here would not apply in browsers which properly support ES6.
module.exports = merge( rules, require( './language/not-es5.js' ) );
