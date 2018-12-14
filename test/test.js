/* eslint-env node, es6 */
/* eslint-disable no-console */
var fs = require( 'fs' ),
	assert = require( 'assert' ),
	assertDiff = require( 'assert-diff' ),

	validFixturesFile, validFixtures,
	invalidFixturesFile, invalidFixtures, testPositivesFailures,

	profiles = require( '../package.json' ).files
		// Trim ".json" from fileName end
		.map( fileName => fileName.slice( 0, -5 ) )
		// TODO: Test language profiles too
		.filter( fileName => ( fileName.indexOf( 'language/' ) === -1 ) );

profiles.forEach( function ( profile ) {
	var count, config;

	console.log( 'Testing the "' + profile + '" profile suite.' );

	config = require( '../' + profile + '.json' );
	validFixturesFile = __dirname + '/fixtures/' + profile + '/valid.js';
	invalidFixturesFile = __dirname + '/fixtures/' + profile + '/invalid.js';

	// Test for positive rules
	count = 0;
	validFixtures = fs.readFileSync( validFixturesFile );
	Object.keys( config.rules ).forEach( function ( rule ) {
		// Negative rules are covered below
		if ( !rule.match( /^no-|\/no-/ ) ) {
			count++;
			assert( validFixtures.indexOf( 'Rule: ' + rule ) !== -1, 'Rule ' + rule + ' is covered' );
		}
	} );
	console.log( '\tPositive rules (' + count + ') are covered.' );

	// Verify coverage
	count = 0;
	invalidFixtures = fs.readFileSync( invalidFixturesFile );
	testPositivesFailures = fs.readFileSync( __dirname + '/fixtures/' + profile + '/positiveFailures.json' );
	Object.keys( config.rules ).forEach( function ( rule ) {
		var rDisableRule = new RegExp( '(/[/*]) eslint-disable(-next-line)? ([a-z-]+, )??' + rule );
		// Positive rules are covered above
		if ( rule.match( /^no-|\/no-/ ) || testPositivesFailures.indexOf( rule ) !== -1 ) {
			count++;
			assertDiff( rDisableRule.test( invalidFixtures.toString() ), 'Rule ' + rule + ' is covered' );
		}
	} );
	console.log( '\tNegative rules (' + count + ') covered.' );

	console.log( '\t✅ The "' + profile + '" profile suite is fully covered.\n' );
} );
