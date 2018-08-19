/* eslint-env node */
var assert = require( 'assert' ),
	fs = require( 'fs' ),
	fixture5 = fs.readFileSync( __dirname + '/fixtures/valid-es5.js' ),
	fixture6 = fs.readFileSync( __dirname + '/fixtures/valid-es6.js' ),
	fixtureQUnit = fs.readFileSync( __dirname + '/fixtures/qunit/valid-qunit.js' ),
	config = require( '../wikimedia.json' ),
	configQUnit = require( '../qunit.json' ),
	count = 0;

Object.keys( config.rules ).concat( Object.keys( configQUnit.rules ) ).forEach( function ( rule ) {
	// Negative rules are covered by test/testInvalid.js
	if ( !rule.match( /^no-|\/no-/ ) ) {
		count++;
		assert(
			(
				fixture5.indexOf( 'Rule: ' + rule ) !== -1 ||
				fixture6.indexOf( 'Rule: ' + rule ) !== -1 ||
				fixtureQUnit.indexOf( 'Rule: ' + rule ) !== -1
			),
			'Rule ' + rule + ' is covered'
		);
	}
} );

// eslint-disable-next-line no-console
console.log( 'Positive rules (' + count + ') are covered.' );
