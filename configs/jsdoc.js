import jsdoc from 'eslint-plugin-jsdoc';

export default [
	{
		name: 'wikimedia/jsdoc',
		plugins: {
			jsdoc
		},
		settings: {
			jsdoc: {
				tagNamePreference: {
					augments: 'extends',
					func: 'method',
					function: 'method',
					linkcode: 'link',
					linkplain: 'link',
					returns: 'return',
					yields: 'yield',

					cfg: 'cfg',
					chainable: 'chainable',
					'tag constructor': 'constructor',
					inheritable: 'inheritable',
					localdoc: 'localdoc',
					singleton: 'singleton',
					uses: 'uses'
				},
				preferredTypes: {
					$: 'jQuery',
					array: 'Array',
					Boolean: 'boolean',
					date: 'Date',
					error: 'Error',
					function: 'Function',
					mixed: 'Mixed',
					Null: 'null',
					Number: 'number',
					object: 'Object',
					regexp: 'RegExp',
					set: 'Set',
					String: 'string',
					Undefined: 'undefined'
				},
				mode: 'jsdoc'
			}
		},
		rules: {
			...jsdoc.configs.recommended.rules,
			'jsdoc/check-param-names': [ 'warn', { allowExtraTrailingParamDocs: true } ],
			'jsdoc/check-tag-names': [
				'warn',
				{
					definedTags: [
						'ignore',
						'internal',
						'stable'
					]
				}
			],
			'jsdoc/check-values': 'off',
			'jsdoc/empty-tags': 'off',
			'jsdoc/escape-inline-tags': 'off',
			'jsdoc/reject-any-type': 'off',
			'jsdoc/no-blank-blocks': 'warn',
			'jsdoc/no-blank-block-descriptions': 'warn',
			'jsdoc/no-defaults': 'off',
			'jsdoc/no-multi-asterisks': [ 'error', { allowWhitespace: true } ],
			'jsdoc/reject-function-type': 'off',
			'jsdoc/require-asterisk-prefix': 'error',
			'jsdoc/require-jsdoc': 'off',
			'jsdoc/require-next-type': 'off',
			'jsdoc/require-param-description': 'off',
			'jsdoc/require-property': 'off',
			'jsdoc/require-property-description': 'off',
			'jsdoc/require-property-name': 'off',
			'jsdoc/require-returns-description': 'off',
			'jsdoc/require-yields-type': 'off',
			'jsdoc/tag-lines': [ 'warn', 'any', { startLines: 1 } ]
		}
	}
];

