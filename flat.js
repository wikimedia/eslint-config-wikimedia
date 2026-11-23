'use strict';

const path = require( 'path' );
const { defineConfig, globalIgnores } = require( 'eslint/config' );

// Global ignores, relative to the project's config file.
const ignores = Object.freeze( [
	// Dot folders, e.g. .git
	'.*/',
	// Dependencies and generated files
	'vendor/',
	'coverage/',
	'**/package-lock.json',
	// Translations from translatewiki.net
	'**/i18n/**/*.json',
	'!**/i18n/**/en.json',
	'!**/i18n/**/qqq.json'
] );

/**
 * Get the flat config objects for one or more of the configs in this package.
 *
 * @param {...string} names Config names, e.g. 'client', 'mediawiki/qunit'
 * @return {Object[]} Flat config objects
 */
module.exports = ( ...names ) => defineConfig(
	// eslint-disable-next-line security/detect-non-literal-require
	...names.map( ( name ) => require( path.join( __dirname, name ) ) ),
	globalIgnores( [ ...ignores ], 'wikimedia/ignores' )
);

module.exports.ignores = ignores;
