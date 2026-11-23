'use strict';

const { defineConfig } = require( 'eslint/config' );

module.exports = defineConfig( {
	name: 'wikimedia/jsduck',
	extends: [ require( './jsdoc' ) ],
	settings: {
		jsdoc: {
			tagNamePreference: {
				alias: 'alternateClassName',
				mixes: 'mixins',
				typedef: 'type'
			}
		}
	},
	rules: {
		'jsdoc/require-returns': 'off',
		'jsdoc/require-returns-check': 'off'
	}
} );
