/* eslint-env node */
var assert = require( 'assert' ),
	fs = require( 'fs' ),
	fixture = fs.readFileSync( __dirname + '/fixtures/sample.js' ),
	config = require( '../.eslintrc.json' ),
	rule;

for ( rule in config.rules ) {
	// @todo Also check negative rules (issue #5)
	if ( !rule.match( /^no-/ ) ) {
		assert( fixture.indexOf( 'Rule: ' + rule ) !== -1, 'Rule ' + rule + ' is covered' );
	}
}

// eslint-disable-next-line no-console
console.log( 'Checked ' + Object.keys( config.rules ).length + ' rules.' );
