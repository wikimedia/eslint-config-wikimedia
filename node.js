'use strict';

const { defineConfig } = require( 'eslint/config' );
const n = require( 'eslint-plugin-n' );

module.exports = defineConfig(
	{
		name: 'wikimedia/node',
		extends: [ n.configs[ 'flat/mixed-esm-and-cjs' ] ],
		rules: {
			strict: [ 'error', 'safe' ],
			'n/no-extraneous-import': 'off',
			'n/no-extraneous-require': 'off',
			'n/no-unpublished-import': 'off',
			'n/no-unpublished-require': 'off',
			'n/no-unsupported-features/es-builtins': 'off',
			'n/no-unsupported-features/es-syntax': 'off',
			'n/hashbang': 'off'
		}
	},
	{
		name: 'wikimedia/node',
		files: [ '**/*.json', '**/*.jsonc' ],
		extends: [ require( './json' ) ]
	},
	{
		name: 'wikimedia/node',
		files: [ '**/*.yaml', '**/*.yml' ],
		extends: [ require( './yaml' ) ]
	}
);
