'use strict';

const path = require( 'path' );
const { FlatCompat } = require( '@eslint/eslintrc' );

// Load @eslint/js from the installed copy of ESLint, so that
// "eslint:recommended" agrees with the ESLint major version in use.
// eslint-disable-next-line security/detect-non-literal-require
const js = require( require.resolve( '@eslint/js', { paths: [ require.resolve( 'eslint' ) ] } ) );

// FlatCompat matches override "files" patterns relative to baseDirectory.
// Use the filesystem root, so that the patterns match files in all projects.
const compat = new FlatCompat( {
	baseDirectory: path.parse( __dirname ).root,
	resolvePluginsRelativeTo: __dirname,
	recommendedConfig: js.configs.recommended
} );

const jsonEs = require( 'eslint-plugin-json-es' );
// ESLint must serialise the parser for --cache, so the parser must have a "meta" object.
// eslint-plugin-json-es does not supply one.
const jsonEsParser = {
	meta: {
		name: 'eslint-plugin-json-es',
		version: require( 'eslint-plugin-json-es/package.json' ).version
	},
	parseForESLint: jsonEs.parseForESLint
};

/**
 * @param {Object} config Flat config object
 * @return {boolean} The config object is a global ignore
 */
const isGlobalIgnore = ( config ) => Object.keys( config ).length === 1 &&
	Array.isArray( config.ignores );

/**
 * @param {Object} config Flat config object
 * @return {Object} The config object, with jsonEsParser in place of the json-es parser
 */
const fixJsonEsParser = ( config ) => !( jsonEs.meta && jsonEs.meta.name ) &&
	config.languageOptions &&
	config.languageOptions.parser === jsonEs ?
	{ ...config, languageOptions: { ...config.languageOptions, parser: jsonEsParser } } :
	config;

/**
 * Get flat config objects for one or more of the eslintrc configs in this package.
 *
 * @param {...string} names Config names, as for "extends" without the "wikimedia/" prefix,
 *  e.g. 'client', 'mediawiki/qunit'
 * @return {Object[]} Flat config objects
 */
module.exports = ( ...names ) => [
	// Flat config parses .js files as modules, but eslintrc parses them as scripts.
	{ files: [ '**/*.js' ], languageOptions: { sourceType: 'script' } },
	// FlatCompat matches ignorePatterns relative to baseDirectory, not to the project.
	// Use a flat config ignore instead.
	...compat.extends( ...names.map( ( name ) => path.join( __dirname, name ) ) )
		.filter( ( config ) => !isGlobalIgnore( config ) )
		.map( fixJsonEsParser ),
	{ ignores: [ '.*/' ] }
];
