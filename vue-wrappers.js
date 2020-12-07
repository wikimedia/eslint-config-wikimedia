'use strict';

/*
 * eslint-plugin-vue doesn't automatically apply core eslint rules to JS code inside templates,
 * but it does provide wrappers for some rules (e.g. vue/eqeqeq applies the eqeqeq rule in
 * templates). Set the values for these wrapped rules to be equal to the corresponding values
 * in common
 */
const commonRules = require( './common' ).rules;
const rulesToMap = [
	'array-bracket-newline',
	'array-bracket-spacing',
	'arrow-spacing',
	'block-spacing',
	'brace-style',
	'camelcase',
	'comma-dangle',
	'comma-spacing',
	'comma-style',
	'dot-location',
	'dot-notation',
	'eqeqeq',
	'func-call-spacing',
	'key-spacing',
	'keyword-spacing',
	// max-len results in double warnings for lines in <script> tags
	'no-constant-condition',
	'no-empty-pattern',
	'no-extra-parens',
	'no-irregular-whitespace',
	'no-multi-spaces',
	'no-sparse-arrays',
	'no-useless-concat',
	'object-curly-newline',
	'object-curly-spacing',
	'object-property-newline',
	// object-shorthand is not set by our rules (yet?), add it if/when it is
	'operator-linebreak',
	'prefer-template',
	'quote-props',
	'sort-keys',
	'space-infix-ops',
	'space-in-parens',
	'space-unary-ops',
	'template-curly-spacing'
];

const wrappedRules = {};
for ( const rule of rulesToMap ) {
	if ( rule in commonRules ) {
		wrappedRules[ 'vue/' + rule ] = commonRules[ rule ];
	}
}

module.exports = {
	rules: wrappedRules
};
