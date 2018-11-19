/* eslint-env node */
/* eslint-disable no-console */
var fs = require( 'fs' ),
	assert = require( 'assert' ),
	assertDiff = require( 'assert-diff' ),
	eslint = require( 'eslint' ),

	validFixturesFile, validFixtures,
	invalidFixturesFile, invalidFixtures, testPositivesFailures,
	expectedFailuresFile, expectedFailures,
	engine, report, results, prevFilename, prevLine,

	// TODO: Load this from package.json's manifest
	profiles = [ 'common', 'client', 'qunit', 'server' ];

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

	// Test for failures including negative rules
	count = 0;
	invalidFixtures = fs.readFileSync( invalidFixturesFile );
	expectedFailuresFile = __dirname + '/fixtures/' + profile + '/invalid-results.json';
	expectedFailures = require( expectedFailuresFile );
	// Verify we got the expected warnings
	engine = new eslint.CLIEngine( {
		outputFile: false,
		maxWarnings: -1,
		// Disable eslint-disable comments, which we use for coverage
		allowInlineConfig: false
	} );
	report = engine.executeOnFiles( [ invalidFixturesFile ] );
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
		fs.writeFileSync( expectedFailuresFile, JSON.stringify( results, null, '\t' ) );
		return;
	}
	assertDiff.deepEqual( results, expectedFailures, 'Expected warnings' );
	console.log( '\tVerified ' + results[ 0 ].length + ' expected warnings.' );

	// Verify coverage
	count = 0;
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
