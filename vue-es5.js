/* eslint-disable quotes, quote-props  */
module.exports = {
	"extends": [
		"./vue-es6.js",
		// We can't use ./language/es5.js here, because ecmaVersion: 5 breaks the Vue plugin
		// Instead, use es/no-2015 to prohibit ES6+ syntax
		"./language/not-es5.js",
		"plugin:es/no-2015"
	],
	"plugins": [ "es" ],
	// The Vue plugin sets sourceType: "module" and enables JSX: undo those things
	"parserOptions": {
		"sourceType": "script",
		"ecmaFeatures": {
			"jsx": false
		}
	},
	"env": {
		"es6": false
	},
	"rules": {
		// This is a wrapper rule, but it can't be in vue-wrappers.js because it's ES5-specific
		"vue/no-restricted-syntax": require( './language/not-es5.js' ).rules[ 'no-restricted-syntax' ]
	}
};
