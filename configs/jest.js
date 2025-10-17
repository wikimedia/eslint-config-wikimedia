import pluginJest from 'eslint-plugin-jest';

export default [
	{
		name: 'wikimedia/jest',
		...pluginJest.configs['flat/recommended'],
		languageOptions: {
			globals: {
				...pluginJest.environments.globals.globals,
				global: false
			}
		},
		rules: {
			...pluginJest.configs['flat/recommended'].rules,
			'jest/no-deprecated-functions': 'off',
			'jest/no-disabled-tests': 'off'
		}
	}
];

