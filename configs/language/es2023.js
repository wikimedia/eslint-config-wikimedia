import eslintPluginEsX from 'eslint-plugin-es-x';
import globals from 'globals';

export default [
	{
		name: 'wikimedia/language/es2023',
		plugins: {
			'es-x': eslintPluginEsX
		},
		languageOptions: {
			ecmaVersion: 2023,
			sourceType: 'script',
			globals: {
				...globals.es2023
			}
		},
		rules: {
			...eslintPluginEsX.configs['flat/restrict-to-es2023'].rules,
			...eslintPluginEsX.configs['flat/no-new-in-esnext'].rules
		}
	}
];

