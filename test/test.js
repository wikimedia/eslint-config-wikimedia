/* eslint-env mocha */

'use strict';

const fs = require( 'fs' ),
	assert = require( 'assert' ),
	path = require( 'path' ),
	fixtureExtensions = [ 'js', 'mjs', 'vue', 'win.js' ],
	configs = require( '../package' ).files
		.filter( ( fileName ) => (
			// TODO: Test language configs too
			fileName !== 'language' &&
			// selenium has no local rules
			fileName !== 'selenium.json' &&
			// Node rules are tested through server config
			fileName.indexOf( 'node' ) === -1
		) );

function getRules( config ) {
	const rules = Object.assign( {}, config.rules );
	if ( config.overrides ) {
		config.overrides.forEach( ( override ) => {
			Object.assign( rules, override.rules );
		} );
	}
	return rules;
}

configs.forEach( ( configPath ) => {
	const configName = configPath.replace( /\..*/, '' );
	describe( `"${configName}" config`, () => {

		const config = require( `../${configPath}` );
		const validFixturesFiles = fixtureExtensions
			.map( ( ext ) => path.resolve( __dirname, `fixtures/${configName}/valid.${ext}` ) )
			.filter( fs.existsSync );
		const invalidFixturesFiles = fixtureExtensions
			.map( ( ext ) => path.resolve( __dirname, `fixtures/${configName}/invalid.${ext}` ) )
			.filter( fs.existsSync );
		const rules = getRules( config );

		if ( configName === 'server' ) {
			// Load the rules for Node & ES2018 when testing server
			Object.assign(
				rules,
				getRules( require( '../node' ) ),
				getRules( require( '../language/es2018' ) )
			);
		}

		function isEnabled( rule ) {
			return rules[ rule ] !== 'off';
		}

		// Invalid examples are required for every rule that is enabled,
		// as reportUnusedDisableDirectives ensures the disable directives
		// are actually being used.
		it( 'Invalid examples', () => {
			const invalidFixtures = invalidFixturesFiles.map( ( file ) =>
				fs.readFileSync( file ).toString()
			).join( '' );

			Object.keys( rules ).forEach( ( rule ) => {
				const rDisableRule = new RegExp( `(/[/*]|<!--) eslint-disable(-next-line)? ([a-z-/]+, )*?${rule}` );
				// Disabled rules are covered below
				if ( isEnabled( rule ) ) {
					assert( rDisableRule.test( invalidFixtures.toString() ), `Rule ${rule} is covered` );
				}
			} );
		} );

		it( 'Valid examples', () => {
			const validFixtures = validFixturesFiles.map( ( file ) =>
				fs.readFileSync( file ).toString()
			).join( '' );

			Object.keys( rules ).forEach( ( rule ) => {
				// Enabled rules are covered above
				if ( !isEnabled( rule ) ) {
					assert( validFixtures.includes( `Rule: ${rule}` ), `Rule ${rule} (off) is covered` );
				}
			} );
		} );
	} );
} );
