/* eslint-disable quote-props, quotes */
module.exports = {
	"extends": [
		"./vue-common.json",
		"./language/es6.json"
	],
	"rules": {
		// This is a wrapper rule, but it can't be in vue-wrappers.js because it's ES6-specific
		"vue/no-restricted-syntax": require( './language/not-es6.js' ).rules[ 'no-restricted-syntax' ]
	}
};
