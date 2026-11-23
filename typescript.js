'use strict';

const { defineConfig } = require( 'eslint/config' );
const typescriptEslint = require( '@typescript-eslint/eslint-plugin' );
const stylistic = require( '@stylistic/eslint-plugin' );

module.exports = defineConfig( {
	name: 'wikimedia/typescript',
	extends: [ typescriptEslint.configs[ 'flat/recommended' ] ],
	plugins: {
		'@stylistic': stylistic
	},
	languageOptions: {
		parserOptions: {
			sourceType: 'module',
			ecmaFeatures: {
				impliedStrict: true
			}
		}
	},
	rules: {
		'comma-dangle': [ 'error', 'always-multiline' ],
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
				colon: {
					before: false,
					after: true
				}
			}
		} ],
		'@typescript-eslint/unified-signatures': 'error',
		// Also checks the arrows in function types
		'arrow-spacing': 'off',
		'@stylistic/arrow-spacing': 'error',
		semi: 'off',
		'@stylistic/semi': [ 'error', 'always' ]
	}
} );
