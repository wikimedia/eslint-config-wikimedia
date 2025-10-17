import pluginMediawiki from 'eslint-plugin-mediawiki';
import pluginCompat from 'eslint-plugin-compat';
import pluginVue from 'eslint-plugin-vue';
import browsersModern from 'browserslist-config-wikimedia/modern';

// Get max-len pattern from base config
const maxLenIgnorePattern = '^[\\s]*(//|<!--) (es|style)lint-.+';
const mediawikiMaxLenPattern = '(' + maxLenIgnorePattern + '|' + '[\\s]*(//|<!--) *\\* ?[\\S]+$' + ')';

export default [
	{
		name: 'wikimedia/mediawiki/common',
		plugins: {
			mediawiki: pluginMediawiki,
			compat: pluginCompat
		},
		languageOptions: {
			sourceType: 'commonjs',
			globals: {
				mw: 'readonly',
				OO: 'readonly',
				require: 'readonly',
				module: 'readonly',
				exports: 'writable'
			}
		},
		rules: {
			...pluginMediawiki.configs.common.rules,
			'compat/compat': [
				'error',
				browsersModern.join( ',' )
			],
			'max-len': [ 'warn', {
				code: 100,
				tabWidth: 4,
				ignorePattern: mediawikiMaxLenPattern,
				ignoreUrls: true,
				ignoreComments: false,
				ignoreRegExpLiterals: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true
			} ]
		}
	},
	{
		name: 'wikimedia/mediawiki/vue',
		files: [ '**/*.vue' ],
		plugins: {
			vue: pluginVue,
			mediawiki: pluginMediawiki
		},
		...pluginVue.configs['flat/base'],
		rules: {
			...pluginMediawiki.configs.vue.rules,
			'vue/html-self-closing': [ 'error', {
				html: {
					void: 'never',
					normal: 'never',
					component: 'never'
				}
			} ],
			'vue/component-name-in-template-casing': [ 'error', 'kebab-case' ],
			'vue/no-child-content': [ 'error', {
				additionalDirectives: [ 'i18n-html' ]
			} ]
		}
	}
];

