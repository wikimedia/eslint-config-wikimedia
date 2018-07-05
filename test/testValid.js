/* eslint-env node */
var assert = require( 'assert' ),
	fs = require( 'fs' ),
	fixture5 = fs.readFileSync( __dirname + '/fixtures/valid-es5.js' ),
	fixture6 = fs.readFileSync( __dirname + '/fixtures/valid-es6.js' ),
	config = require( '../.eslintrc.json' ),
	rule, count;

count = 0;
for ( rule in config.rules ) {
	// Negative rules are covered by test/testInvalid.js
	if ( !rule.match( /^no-/ ) ) {
		count++;
		assert(
			( fixture5.indexOf( 'Rule: ' + rule ) !== -1 ) || ( fixture6.indexOf( 'Rule: ' + rule ) !== -1 ),
			'Rule ' + rule + ' is covered'
		);
	}
}

// eslint-disable-next-line no-console
console.log( 'Positive rules (' + count + ') are covered.' );
