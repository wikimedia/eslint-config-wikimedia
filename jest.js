'use strict';

const { defineConfig } = require( 'eslint/config' );
const jest = require( 'eslint-plugin-jest' );
const { named } = require( './lib/utils' );

module.exports = defineConfig( {
	name: 'wikimedia/jest',
	extends: [ named( 'jest/recommended', jest.configs[ 'flat/recommended' ] ) ],
	languageOptions: {
		globals: {
			global: false
		}
	},
	rules: {
		'jest/no-deprecated-functions': 'off',
		'jest/no-disabled-tests': 'off'
	}
} );
