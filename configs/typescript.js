import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import stylistic from '@stylistic/eslint-plugin';

export default [
	{
		name: 'wikimedia/typescript',
		files: [ '**/*.ts' ],
		plugins: {
			'@typescript-eslint': tseslint,
			'@stylistic': stylistic
		},
		languageOptions: {
			parser: tsparser,
			parserOptions: {
				sourceType: 'module',
				ecmaFeatures: {
					impliedStrict: true
				}
			}
		},
		rules: {
			...tseslint.configs.recommended.rules,
			'comma-dangle': [ 'error', 'always-multiline' ],
			'@typescript-eslint/array-type': [ 'error', { default: 'array' } ],
			'@typescript-eslint/explicit-function-return-type': [ 'error', {
				allowExpressions: true,
				allowTypedFunctionExpressions: true,
				allowHigherOrderFunctions: true
			} ],
			'@typescript-eslint/explicit-module-boundary-types': [ 'error' ],
			'@typescript-eslint/explicit-member-accessibility': [ 'error', { accessibility: 'explicit' } ],
			'@stylistic/indent': [ 'error', 'tab', { SwitchCase: 1 } ],
			'@stylistic/member-delimiter-style': 'error',
			'no-empty-function': 'off',
			'@typescript-eslint/no-empty-function': 'error',
			'@typescript-eslint/no-empty-interface': [ 'error', { allowSingleExtends: true } ],
			'@typescript-eslint/no-this-alias': 'error',
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
			'semi': 'off',
			'@stylistic/semi': [ 'error', 'always' ]
		}
	}
];
