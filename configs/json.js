import pluginJsonEs from 'eslint-plugin-json-es';

export default [
	{
		name: 'wikimedia/json',
		files: [ '**/*.json', '**/*.jsonc' ],
		plugins: {
			'json-es': pluginJsonEs
		},
		languageOptions: {
			parser: pluginJsonEs
		},
		rules: {
			...pluginJsonEs.configs.recommended.rules,
			'json-es/use-valid-json': 'error',
			'indent': [ 'error', 'tab' ],
			'strict': 'off',
			'max-len': 'off',
			'security/detect-bidi-characters': 'off'
		}
	}
];

