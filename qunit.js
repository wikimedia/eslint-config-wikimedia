'use strict';

const { defineConfig } = require( 'eslint/config' );
const globals = require( 'globals' );
const qunit = require( 'eslint-plugin-qunit' );
const { legacyPluginConfig } = require( './lib/utils' );

module.exports = defineConfig( {
	name: 'wikimedia/qunit',
	extends: [
		legacyPluginConfig( 'qunit', qunit, 'recommended' ),
		{ name: 'globals/qunit', languageOptions: { globals: globals.qunit } }
	],
	languageOptions: {
		globals: {
			QUnit: 'readonly'
		}
	},
	rules: {
		'no-shadow': [
			'error',
			{
				allow: [ 'hooks' ]
			}
		],
		'qunit/no-assert-equal': 'off',
		'qunit/no-assert-equal-boolean': 'off',
		'qunit/no-assert-logical-expression': 'off',
		'qunit/no-conditional-assertions': 'off',
		'qunit/no-loose-assertions': 'error',
		'qunit/no-negated-ok': 'off',
		'qunit/no-ok-equality': 'off',
		'qunit/require-expect': [ 'error', 'never-except-zero' ]
	}
} );
