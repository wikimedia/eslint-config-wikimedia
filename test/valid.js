/* eslint-env node */
var assert = require( 'assert' ),
	fs = require( 'fs' ),
	fixture = fs.readFileSync( __dirname + '/fixtures/valid.js' ),
	config = require( '../.eslintrc.json' ),
	rule, count;

count = 0;
for ( rule in config.rules ) {
	// Negative rules are covered by test/invalid.js
	if ( !rule.match( /^no-/ ) ) {
		count++;
		assert( fixture.indexOf( 'Rule: ' + rule ) !== -1, 'Rule ' + rule + ' is covered' );
	}
}

// eslint-disable-next-line no-console
console.log( 'Positive rules (' + count + ') are covered.' );
