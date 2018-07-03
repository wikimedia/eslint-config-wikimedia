/* eslint-env node */
/* eslint-disable no-console */
var assert = require( 'assert-diff' ),
	eslint = require( 'eslint' ),
	fs = require( 'fs' ),

	fixture5 = fs.readFileSync( __dirname + '/fixtures/invalid-es5.js' ).toString(),
	fixture6 = fs.readFileSync( __dirname + '/fixtures/invalid-es6.js' ).toString(),
	config = require( '../.eslintrc.json' ),
	rule, count, engine, report, results, expected, testPositives;

// Verify we got the expected warnings
engine = new eslint.CLIEngine( {
	outputFile: false,
	maxWarnings: -1,
	// Disable eslint-disable comments, which we use for coverage
	allowInlineConfig: false
} );
report = engine.executeOnFiles( [ __dirname + '/fixtures/invalid-es5.js', __dirname + '/fixtures/invalid-es6.js' ] );
results = report.results.map( function ( fileResult ) {
	return fileResult.messages.map( function ( result ) {
		return {
			filename: fileResult.filePath.slice( __dirname.length + 1 ),
			line: result.line,
			column: result.column,
			ruleId: result.ruleId
		};
	} );
} );
if ( process.argv[ 2 ] === 'dump' ) {
	console.log( JSON.stringify( results, null, '\t' ) );
	return;
}
expected = require( './fixtures/invalid-results.json' );
assert.deepEqual( results, expected, 'Expected warnings' );
console.log( 'Verified ' + ( results[ 0 ].length + results[ 1 ].length ) + ' expected warnings.' );

// Verify coverage
count = 0;
testPositives = [
	'arrow-parens' // Has an invalid test case
];
for ( rule in config.rules ) {
	// Positive rules are covered by test/testValid.js
	if ( rule.match( /^no-/ ) || testPositives.indexOf( rule ) !== -1 ) {
		count++;
		assert(
			(
				fixture5.match( new RegExp(
					'(//|/*) eslint-disable(-next-line)? ([a-z-]+, )??' + rule
				) ) ||
				fixture6.match( new RegExp(
					'(//|/*) eslint-disable(-next-line)? ([a-z-]+, )??' + rule
				) )
			)
			,
			'Rule ' + rule + ' is covered'
		);
	}
}
console.log( 'Negative rules (' + count + ') covered.' );
