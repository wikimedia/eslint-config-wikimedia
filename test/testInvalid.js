/* eslint-env node */
/* eslint-disable no-console */
var assert = require( 'assert-diff' ),
	eslint = require( 'eslint' ),
	fs = require( 'fs' ),

	config = require( '../wikimedia.json' ),
	configQUnit = require( '../qunit.json' ),
	configServices = require( '../qunit.json' ),
	fixture5Path = __dirname + '/fixtures/invalid-es5.js',
	fixture5 = fs.readFileSync( fixture5Path ).toString(),
	fixture6Path = __dirname + '/fixtures/invalid-es6.js',
	fixture6 = fs.readFileSync( fixture6Path ).toString(),
	fixtureQUnitPath = __dirname + '/fixtures/qunit/invalid-qunit.js',
	fixtureQUnit = fs.readFileSync( fixtureQUnitPath ).toString(),
	fixtureServicesPath = __dirname + '/fixtures/services/invalid-services.js',
	fixtureServices = fs.readFileSync( fixtureServicesPath ).toString(),
	count, engine, report, results, expected, testPositives,
	prevFilename, prevLine;

// Verify we got the expected warnings
engine = new eslint.CLIEngine( {
	outputFile: false,
	maxWarnings: -1,
	// Disable eslint-disable comments, which we use for coverage
	allowInlineConfig: false
} );
report = engine.executeOnFiles( [
	fixture5Path,
	fixture6Path,
	fixtureQUnitPath,
	fixtureServicesPath
] );
results = report.results.map( function ( fileResult ) {
	return fileResult.messages.map( function ( result ) {
		var filename, relativeLine;

		filename = fileResult.filePath.slice( __dirname.length + 1 );
		if ( prevFilename !== filename ) {
			prevFilename = filename;
			prevLine = 0;
		}

		relativeLine = result.line - prevLine;
		prevLine = result.line;

		return {
			filename: filename,
			line: relativeLine,
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
	'arrow-parens', // Has an invalid test case
	'quotes' // Has an invalid test case
];
Object.keys( config.rules )
	.concat( Object.keys( configQUnit.rules ) )
	.concat( Object.keys( configServices.rules ) )
	.forEach( function ( rule ) {
		var rDisableRule = new RegExp( '(//|/*) eslint-disable(-next-line)? ([a-z-]+, )??' + rule );
		// Positive rules are covered by test/testValid.js
		if ( rule.match( /^no-|\/no-/ ) || testPositives.indexOf( rule ) !== -1 ) {
			count++;
			assert(
				(
					rDisableRule.test( fixture5 ) ||
					rDisableRule.test( fixture6 ) ||
					rDisableRule.test( fixtureQUnit ) ||
					rDisableRule.test( fixtureServices )
				),
				'Rule ' + rule + ' is covered'
			);
		}
	} );
console.log( 'Negative rules (' + count + ') covered.' );
