import eslintPluginEsX from 'eslint-plugin-es-x';
import globals from 'globals';

export default [
	{
		name: 'wikimedia/language/es2016',
		plugins: {
			'es-x': eslintPluginEsX
		},
		languageOptions: {
			ecmaVersion: 2016,
			sourceType: 'script',
			globals: {
				...globals.es2016
			}
		},
		rules: {
			...eslintPluginEsX.configs['flat/restrict-to-es2016'].rules,
			...eslintPluginEsX.configs['flat/no-new-in-esnext'].rules
		}
	}
];

