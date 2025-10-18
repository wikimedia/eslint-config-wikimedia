import eslintPluginEsX from 'eslint-plugin-es-x';
import globals from 'globals';

export default [
	{
		name: 'wikimedia/language/es2018',
		plugins: {
			'es-x': eslintPluginEsX
		},
		languageOptions: {
			ecmaVersion: 2018,
			sourceType: 'script',
			globals: {
				...globals.es2018
			}
		},
		rules: {
			...eslintPluginEsX.configs['flat/restrict-to-es2018'].rules,
			...eslintPluginEsX.configs['flat/no-new-in-esnext'].rules
		}
	}
];

