/* eslint-env node */
/* eslint-disable no-console */
var assert = require( 'assert-diff' ),
	eslint = require( 'eslint' ),
	fs = require( 'fs' ),

	fixture = fs.readFileSync( __dirname + '/fixtures/invalid.js' ).toString(),
	config = require( '../.eslintrc.json' ),
	rule, count, engine, report, results, expected, ignored;

// Verify we got the expected warnings
engine = new eslint.CLIEngine( {
	outputFile: false,
	maxWarnings: -1,
	// Disable eslint-disable comments, which we use for coverage
	allowInlineConfig: false
} );
report = engine.executeOnFiles( [ __dirname + '/fixtures/invalid.js' ] );
results = report.results[ 0 ].messages.map( function ( result ) {
	return {
		line: result.line,
		column: result.column,
		ruleId: result.ruleId
	};
} );
if ( process.argv[ 2 ] === 'dump' ) {
	console.log( JSON.stringify( results, null, '\t' ) );
	return;
}
expected = require( './fixtures/invalid-results.json' );
assert.deepEqual( results, expected, 'Expected warnings' );
console.log( 'Verified ' + results.length + ' expected warnings.' );

// Verify coverage
count = 0;
ignored = [
	'no-useless-computed-key' // Requires ES6
];
for ( rule in config.rules ) {
	// Positive rules are covered by test/valid.js
	if ( rule.match( /^no-/ ) && ignored.indexOf( rule ) === -1 ) {
		count++;
		assert(
			fixture.match( new RegExp(
				'(//|/\*) eslint-disable(-next-line)? ([a-z-]+, )??' + rule
			) ),
			'Rule ' + rule + ' is covered'
		);
	}
}
console.log( 'Negative rules (' + count + ') covered.' );
