/* eslint-env node */
var assert = require( 'assert' ),
	fs = require( 'fs' ),
	config = require( '../wikimedia.json' ),
	configQUnit = require( '../qunit.json' ),
	configServices = require( '../qunit.json' ),
	fixture5 = fs.readFileSync( __dirname + '/fixtures/valid-es5.js' ),
	fixture6 = fs.readFileSync( __dirname + '/fixtures/valid-es6.js' ),
	fixtureQUnit = fs.readFileSync( __dirname + '/fixtures/qunit/valid-qunit.js' ),
	fixtureServices = fs.readFileSync( __dirname + '/fixtures/services/valid-services.js' ),
	count = 0;

Object.keys( config.rules )
	.concat( Object.keys( configQUnit.rules ) )
	.concat( Object.keys( configServices.rules ) )
	.forEach( function ( rule ) {
		// Negative rules are covered by test/testInvalid.js
		if ( !rule.match( /^no-|\/no-/ ) ) {
			count++;
			assert(
				(
					fixture5.indexOf( 'Rule: ' + rule ) !== -1 ||
					fixture6.indexOf( 'Rule: ' + rule ) !== -1 ||
					fixtureQUnit.indexOf( 'Rule: ' + rule ) !== -1 ||
					fixtureServices.indexOf( 'Rule: ' + rule ) !== -1
				),
				'Rule ' + rule + ' is covered'
			);
		}
	} );

// eslint-disable-next-line no-console
console.log( 'Positive rules (' + count + ') are covered.' );
