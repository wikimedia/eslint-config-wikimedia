'use strict';

const { FlatCompat } = require( '@eslint/eslintrc' );

// Load @eslint/js from the installed copy of ESLint, so that
// "eslint:recommended" agrees with the ESLint major version in use.
// eslint-disable-next-line security/detect-non-literal-require
const js = require( require.resolve( '@eslint/js', { paths: [ require.resolve( 'eslint' ) ] } ) );

const compat = new FlatCompat( {
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended
} );

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
	// FlatCompat matches ignorePatterns against paths relative to this package, not to the
	// project, so it ignores all project files. Use a flat config ignore instead.
	...compat.extends( ...names.map( ( name ) => './' + name ) ).filter( ( config ) => !config.ignores ),
	{ ignores: [ '.*/' ] }
];
