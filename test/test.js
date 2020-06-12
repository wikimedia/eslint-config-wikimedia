'use strict';

/* eslint-disable mocha/no-setup-in-describe */

const fs = require( 'fs' ),
	assert = require( 'assert' ),
	path = require( 'path' ),
	configs = require( '../package' ).files;

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
	const fixturesDir = path.resolve( __dirname, `fixtures/${configName}` );
	if ( !fs.existsSync( fixturesDir ) ) {
		it.skip( `No tests for "${configName}" config` );
		return;
	}
	describe( `"${configName}" config`, () => {

		const config = require( `../${configPath}` );

		const fixturesFiles = fs.readdirSync( fixturesDir )
			.map( ( file ) => path.resolve( fixturesDir, file ) );

		const validFixturesFiles = fixturesFiles.filter( ( file ) => file.includes( '/valid' ) );
		const invalidFixturesFiles = fixturesFiles.filter( ( file ) => file.includes( '/invalid' ) );

		let rules = getRules( config );

		if ( configName === 'server' ) {
			// Load the rules for Node & ES2018 when testing server
			Object.assign(
				rules,
				getRules( require( '../node' ) ),
				getRules( require( '../language/es2018' ) )
			);
		}

		if ( configName === 'jsdoc' ) {
			// Expand jsdoc/recommended and test explicitly
			rules = Object.assign(
				{},
				getRules( require( 'eslint-plugin-jsdoc' ).configs.recommended ),
				rules
			);
			console.log( rules );
		}

		function isEnabled( rule ) {
			return rules[ rule ] !== 'off';
		}

		// Invalid examples are required for every rule that is enabled,
		// as reportUnusedDisableDirectives ensures the disable directives
		// are actually being used.
		const invalidFixtures = invalidFixturesFiles.map( ( file ) =>
			fs.readFileSync( file ).toString()
		).join( '' );

		Object.keys( rules ).forEach( ( rule ) => {
			it( `Rule ${rule} is covered in invalid fixture`, () => {
				const rDisableRule = new RegExp( `(/[/*]|<!--) eslint-disable(-next-line)? ([a-z-/]+, )*?${rule}($|[^a-z-])` );
				// Disabled rules are covered below
				if ( isEnabled( rule ) ) {
					assert( rDisableRule.test( invalidFixtures ) );
				}
			} );
		} );

		const validFixtures = validFixturesFiles.map( ( file ) =>
			fs.readFileSync( file ).toString()
		).join( '' );

		Object.keys( rules ).forEach( ( rule ) => {
			const rEnableRule = new RegExp( `Off: ${rule}($|[^a-z-])` );
			if ( !isEnabled( rule ) ) {
				it( `Rule ${rule} is covered as "off" in valid fixture`, () => {
					assert( rEnableRule.test( validFixtures ) );
				} );
			} else {
				it( `Rule ${rule} is not covered as "off" in valid fixture`, () => {
					assert( !rEnableRule.test( validFixtures ) );
				} );
			}
		} );
	} );
} );
