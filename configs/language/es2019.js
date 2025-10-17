import eslintPluginEsX from 'eslint-plugin-es-x';
import globals from 'globals';

export default [
	{
		name: 'wikimedia/language/es2019',
		plugins: {
			'es-x': eslintPluginEsX
		},
		languageOptions: {
			ecmaVersion: 2019,
			sourceType: 'script',
			globals: {
				...globals.es2019
			}
		},
		rules: {
			...eslintPluginEsX.configs['flat/restrict-to-es2019'].rules,
			...eslintPluginEsX.configs['flat/no-new-in-esnext'].rules
		}
	}
];

