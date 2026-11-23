'use strict';

const { defineConfig } = require( 'eslint/config' );
const jsonEs = require( 'eslint-plugin-json-es' );
const { legacyPluginConfig } = require( './lib/utils' );

// ESLint must serialise the parser for --cache, so the parser must have a "meta" object.
// eslint-plugin-json-es does not supply one.
const parser = jsonEs.meta && jsonEs.meta.name ? jsonEs : {
	meta: {
		name: 'eslint-plugin-json-es',
		version: require( 'eslint-plugin-json-es/package.json' ).version
	},
	parseForESLint: jsonEs.parseForESLint
};

module.exports = defineConfig( {
	name: 'wikimedia/json',
	extends: [ legacyPluginConfig( 'json-es', jsonEs, 'recommended' ) ],
	languageOptions: {
		parser,
		ecmaVersion: 2019
	},
	rules: {
		'json-es/use-valid-json': 'error',
		indent: [ 'error', 'tab' ],
		strict: 'off',
		'max-len': 'off',
		'security/detect-bidi-characters': 'off'
	}
} );
