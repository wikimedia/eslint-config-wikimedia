import eslintPluginEsX from 'eslint-plugin-es-x';
import globals from 'globals';

export default [
	{
		name: 'wikimedia/language/es2017',
		plugins: {
			'es-x': eslintPluginEsX
		},
		languageOptions: {
			ecmaVersion: 2017,
			sourceType: 'script',
			globals: {
				...globals.es2017
			}
		},
		rules: {
			...eslintPluginEsX.configs['flat/restrict-to-es2017'].rules,
			...eslintPluginEsX.configs['flat/no-new-in-esnext'].rules
		}
	}
];

