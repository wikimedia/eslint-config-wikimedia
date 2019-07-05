var fs = require( 'fs' ),
	assert = require( 'assert' ),
	assertDiff = require( 'assert-diff' ),

	validFixturesFile, validFixtures,
	invalidFixturesFile, invalidFixtures, testPositivesFailures,

	profiles = require( '../package.json' ).files
		// Trim ".json" from fileName end
		.map( ( fileName ) => fileName.slice( 0, -5 ) )
		.filter( ( fileName ) => (
			// TODO: Test language profiles too
			fileName.indexOf( 'language/' ) === -1 &&
			// Node rules are tested through server profile
			fileName.indexOf( 'node' ) === -1
		) );

profiles.forEach( function ( profile ) {
	var count, config, rules;

	console.log( `Testing the "${profile}" profile suite.` );

	config = require( `../${profile}.json` );
	validFixturesFile = `${__dirname}/fixtures/${profile}/valid.js`;
	invalidFixturesFile = `${__dirname}/fixtures/${profile}/invalid.js`;
	rules = config.rules || {};

	if ( profile === 'server' ) {
		// Load the rules for Node & ES6 when testing server
		Object.assign(
			rules,
			require( '../node.json' ).rules,
			require( '../language/es6.json' ).rules
		);
	}

	// Test for positive rules
	count = 0;
	validFixtures = fs.readFileSync( validFixturesFile );
	Object.keys( rules ).forEach( function ( rule ) {
		// Negative rules are covered below
		if ( !rule.match( /^no-|\/no-/ ) ) {
			count++;
			assert( validFixtures.indexOf( `Rule: ${rule}` ) !== -1, `Rule ${rule} is covered` );
		}
	} );
	console.log( `\tPositive rules (${count}) are covered.` );

	// Verify coverage
	count = 0;
	invalidFixtures = fs.readFileSync( invalidFixturesFile );
	testPositivesFailures = fs.readFileSync( `${__dirname}/fixtures/${profile}/positiveFailures.json` );
	Object.keys( rules ).forEach( function ( rule ) {
		var rDisableRule = new RegExp( `(/[/*]) eslint-disable(-next-line)? ([a-z-]+, )??${rule}` );
		// Positive rules are covered above
		if ( rule.match( /^no-|\/no-/ ) || testPositivesFailures.indexOf( rule ) !== -1 ) {
			count++;
			assertDiff( rDisableRule.test( invalidFixtures.toString() ), `Rule ${rule} is covered` );
		}
	} );
	console.log( `\tNegative rules (${count}) covered.` );

	console.log( `\t✅ The "${profile}" profile suite is fully covered.\n` );
} );
