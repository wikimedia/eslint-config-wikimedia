import pluginMocha from 'eslint-plugin-mocha';
import globals from 'globals';

export default [
	{
		name: 'wikimedia/mocha',
		...pluginMocha.configs['flat/recommended'],
		languageOptions: {
			globals: {
				...globals.mocha
			}
		},
		rules: {
			...pluginMocha.configs['flat/recommended'].rules,
			'mocha/consistent-spacing-between-blocks': 'off',
			'mocha/no-hooks-for-single-case': 'off',
			'mocha/no-mocha-arrows': 'off',
			'mocha/no-skipped-tests': 'off'
		}
	}
];

