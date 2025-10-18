import pluginQunit from 'eslint-plugin-qunit';
import globals from 'globals';

export default [
	{
		name: 'wikimedia/qunit',
		plugins: {
			qunit: pluginQunit
		},
		languageOptions: {
			globals: {
				...globals.qunit
			}
		},
		rules: {
			...pluginQunit.configs.recommended.rules,
			'no-shadow': [ 'error', { allow: [ 'hooks' ] } ],
			'qunit/no-assert-equal': 'off',
			'qunit/no-assert-equal-boolean': 'off',
			'qunit/no-assert-logical-expression': 'off',
			'qunit/no-conditional-assertions': 'off',
			'qunit/no-loose-assertions': 'error',
			'qunit/no-negated-ok': 'off',
			'qunit/no-ok-equality': 'off',
			'qunit/require-expect': [ 'error', 'never-except-zero' ]
		}
	}
];

