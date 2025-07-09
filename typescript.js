'use strict';

module.exports = {
	extends: [
		'plugin:@typescript-eslint/recommended'
	],
	plugins: [
		'@typescript-eslint',
		'@stylistic'
	],
	parserOptions: {
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
		ecmaFeatures: {
			impliedStrict: true
		}
	},
	rules: {
		// general note: rules not in the TS namespace act in combination with their following line
		// align recommended w/ wikimedia style or escalating default warnings to errors
		'@typescript-eslint/array-type': [ 'error', { default: 'array' } ],
		'@typescript-eslint/explicit-function-return-type': [ 'error', {
			allowExpressions: true,
			allowTypedFunctionExpressions: true,
			allowHigherOrderFunctions: true
		} ],
		'@typescript-eslint/explicit-module-boundary-types': [ 'error' ],
		'@typescript-eslint/explicit-member-accessibility': [ 'error', { accessibility: 'explicit' } ],
		// aligned to https://github.com/wikimedia/eslint-config-wikimedia/blob/master/common.json#L21
		'@stylistic/indent': [ 'error', 'tab', { SwitchCase: 1 } ],
		'@stylistic/member-delimiter-style': 'error',
		'no-empty-function': 'off',
		'@typescript-eslint/no-empty-function': 'error',
		'@typescript-eslint/no-empty-interface': [ 'error', { allowSingleExtends: true } ],
		'@typescript-eslint/no-this-alias': 'error',
		// problematic in TypeScript / ES6
		'@typescript-eslint/no-unused-vars': [ 'error', { argsIgnorePattern: '^_' } ],
		'@typescript-eslint/no-useless-constructor': 'error',
		'@typescript-eslint/prefer-function-type': 'error',
		'@stylistic/type-annotation-spacing': [ 'error', {
			before: false,
			after: true,
			overrides: {
				arrow: {
					before: true,
					after: true
				},
				colon: {
					before: false,
					after: true
				}
			}
		} ],
		'@typescript-eslint/unified-signatures': 'error',
		semi: 'off',
		'@stylistic/semi': [ 'error', 'always' ]
	}
};
