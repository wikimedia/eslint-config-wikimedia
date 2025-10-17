import eslintPluginEsX from 'eslint-plugin-es-x';
import globals from 'globals';

export default [
	{
		name: 'wikimedia/language/es2020',
		plugins: {
			'es-x': eslintPluginEsX
		},
		languageOptions: {
			ecmaVersion: 2020,
			sourceType: 'script',
			globals: {
				...globals.es2020
			}
		},
		rules: {
			...eslintPluginEsX.configs['flat/restrict-to-es2020'].rules,
			...eslintPluginEsX.configs['flat/no-new-in-esnext'].rules
		}
	}
];

