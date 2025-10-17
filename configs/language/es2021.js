import eslintPluginEsX from 'eslint-plugin-es-x';
import globals from 'globals';

export default [
	{
		name: 'wikimedia/language/es2021',
		plugins: {
			'es-x': eslintPluginEsX
		},
		languageOptions: {
			ecmaVersion: 2021,
			sourceType: 'script',
			globals: {
				...globals.es2021
			}
		},
		rules: {
			...eslintPluginEsX.configs['flat/restrict-to-es2021'].rules,
			...eslintPluginEsX.configs['flat/no-new-in-esnext'].rules
		}
	}
];

