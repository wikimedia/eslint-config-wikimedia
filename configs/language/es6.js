import eslintPluginEsX from 'eslint-plugin-es-x';
import unicorn from 'eslint-plugin-unicorn';
import globals from 'globals';

export default [
	{
		name: 'wikimedia/language/es6',
		plugins: {
			'es-x': eslintPluginEsX,
			unicorn
		},
		languageOptions: {
			ecmaVersion: 6,
			sourceType: 'script',
			globals: {
				...globals.es2015
			}
		},
		rules: {
			...eslintPluginEsX.configs['flat/restrict-to-es2015'].rules,
			...eslintPluginEsX.configs['flat/no-new-in-esnext'].rules,
			'arrow-parens': 'error',
			'arrow-spacing': 'error',
			'default-param-last': 'error',
			'lines-between-class-members': 'error',
			'no-constructor-return': 'error',
			'no-misleading-character-class': 'error',
			'no-new-require': 'error',
			'no-promise-executor-return': 'error',
			'no-useless-computed-key': 'error',
			'template-curly-spacing': [ 'error', 'always' ],
			'no-var': 'error',
			'one-var': 'off',
			'vars-on-top': 'off',
			'prefer-const': 'error',
			'prefer-arrow-callback': 'error',
			'implicit-arrow-linebreak': 'error',
			'arrow-body-style': 'error',
			'unicorn/no-useless-promise-resolve-reject': 'error',
			'es-x/no-symbol-prototype-description': 'off',
			'es-x/no-resizable-and-growable-arraybuffers': 'off',
			'es-x/no-iterator-prototype-foreach': 'off',
			'es-x/no-iterator-prototype-map': 'off',
			'es-x/no-iterator-prototype-filter': 'off',
			'es-x/no-iterator-prototype-find': 'off'
		}
	}
];

