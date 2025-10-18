import eslintPluginEsX from 'eslint-plugin-es-x';
import globals from 'globals';

export default [
	{
		name: 'wikimedia/language/es2024',
		plugins: {
			'es-x': eslintPluginEsX
		},
		languageOptions: {
			ecmaVersion: 2024,
			sourceType: 'script',
			globals: {
				...globals.es2024
			}
		},
		rules: {
			...eslintPluginEsX.configs['flat/restrict-to-es2024'].rules,
			...eslintPluginEsX.configs['flat/no-new-in-esnext'].rules
		}
	}
];

