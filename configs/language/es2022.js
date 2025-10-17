import eslintPluginEsX from 'eslint-plugin-es-x';
import globals from 'globals';

export default [
	{
		name: 'wikimedia/language/es2022',
		plugins: {
			'es-x': eslintPluginEsX
		},
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: 'script',
			globals: {
				...globals.es2022
			}
		},
		rules: {
			...eslintPluginEsX.configs['flat/restrict-to-es2022'].rules,
			...eslintPluginEsX.configs['flat/no-new-in-esnext'].rules
		}
	}
];

