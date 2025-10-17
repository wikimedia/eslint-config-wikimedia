import unicorn from 'eslint-plugin-unicorn';
import globals from 'globals';

export default [
	{
		name: 'wikimedia/client/common',
		plugins: {
			unicorn
		},
		languageOptions: {
			globals: {
				...globals.browser
			}
		},
		rules: {
			'no-alert': 'error',
			'no-console': 'error',
			'no-implied-eval': 'error',
			'unicorn/no-invalid-remove-event-listener': 'error',
			'security/detect-non-literal-regexp': 'off',
			'security/detect-unsafe-regex': 'off',
			'security/detect-possible-timing-attacks': 'off'
		}
	}
];

