'use strict';

/* eslint-env mocha */

const fs = require( 'fs' ),
	assert = require( 'assert' ),
	fixtureExtensions = [ 'js', 'mjs', 'vue' ],
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
			.map( ( ext ) => `${__dirname}/fixtures/${configName}/valid.${ext}` )
			.filter( fs.existsSync );
		const invalidFixturesFiles = fixtureExtensions
			.map( ( ext ) => `${__dirname}/fixtures/${configName}/invalid.${ext}` )
			.filter( fs.existsSync );
		const rules = getRules( config );

		if ( configName === 'server' ) {
			// Load the rules for Node & ES6 when testing server
			Object.assign(
				rules,
				getRules( require( '../node' ) ),
				getRules( require( '../language/es6' ) )
			);
		}

		function isNegativeRule( rule ) {
			return rule.match( /^no-|\/no-/ ) && rules[ rule ] !== 'off';
		}

		it( 'Positive rules', () => {
			const validFixtures = validFixturesFiles.map( ( file ) =>
				fs.readFileSync( file ).toString()
			).join( '' );
			Object.keys( rules ).forEach( ( rule ) => {
				// Negative rules are covered below
				if ( !isNegativeRule( rule ) ) {
					assert( validFixtures.includes( `Rule: ${rule}` ), `Rule ${rule} is covered` );
				}
			} );
		} );

		it( 'Negative rules', () => {
			const invalidFixtures = invalidFixturesFiles.map( ( file ) =>
				fs.readFileSync( file ).toString()
			).join( '' );

			const testPositivesFailures = fs.readFileSync( `${__dirname}/fixtures/${configName}/positiveFailures.json` );
			Object.keys( rules ).forEach( ( rule ) => {
				const rDisableRule = new RegExp( `(/[/*]|<!--) eslint-disable(-next-line)? ([a-z-/]+, )??${rule}` );
				// Positive rules are covered above
				if (
					isNegativeRule( rule ) ||
					testPositivesFailures.includes( rule )
				) {
					assert( rDisableRule.test( invalidFixtures.toString() ), `Rule ${rule} is covered` );
				}
			} );
		} );
	} );
} );
