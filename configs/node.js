import pluginN from 'eslint-plugin-n';

export default [
	{
		name: 'wikimedia/node',
		...pluginN.configs['flat/recommended'],
		rules: {
			...pluginN.configs['flat/recommended'].rules,
			'strict': [ 'error', 'safe' ],
			'n/no-extraneous-import': 'off',
			'n/no-extraneous-require': 'off',
			'n/no-unpublished-import': 'off',
			'n/no-unpublished-require': 'off',
			'n/no-unsupported-features/es-builtins': 'off',
			'n/no-unsupported-features/es-syntax': 'off',
			'n/hashbang': 'off'
		}
	}
];

