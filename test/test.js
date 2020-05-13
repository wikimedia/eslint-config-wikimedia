const fs = require( 'fs' ),
	assert = require( 'assert' ),
	assertDiff = require( 'assert-diff' ),
	fixtureExtensions = [ 'js', 'vue' ],
	profiles = require( '../package' ).files
		.filter( ( fileName ) => (
			// TODO: Test language profiles too
			fileName !== 'language' &&
			// Node rules are tested through server profile
			fileName.indexOf( 'node' ) === -1
		) );

let validFixturesFiles = [],
	validFixtures = '',
	invalidFixturesFiles = [],
	invalidFixtures = '',
	testPositivesFailures = [];

profiles.forEach( function ( profile ) {
	const profileName = profile.replace( /\..*/, '' );

	console.log( `Testing the "${profileName}" profile suite.` );

	const config = require( `../${profile}` );
	validFixturesFiles = fixtureExtensions
		.map( ( ext ) => `${__dirname}/fixtures/${profileName}/valid.${ext}` )
		.filter( fs.existsSync );
	invalidFixturesFiles = fixtureExtensions
		.map( ( ext ) => `${__dirname}/fixtures/${profileName}/invalid.${ext}` )
		.filter( fs.existsSync );
	const rules = config.rules || {};

	if ( profileName === 'server' ) {
		// Load the rules for Node & ES6 when testing server
		Object.assign(
			rules,
			require( '../node' ).rules,
			require( '../language/es6' ).rules
		);
	}

	let count;

	// Test for positive rules
	count = 0;

	validFixturesFiles.forEach( ( file ) => {
		validFixtures += fs.readFileSync( file ).toString();
	} );

	Object.keys( rules ).forEach( ( rule ) => {
		// Negative rules are covered below
		if ( !rule.match( /^no-|\/no-/ ) ) {
			count++;
			assert( validFixtures.indexOf( `Rule: ${rule}` ) !== -1, `Rule ${rule} is covered` );
		}
	} );
	console.log( `\tPositive rules (${count}) are covered.` );

	// Verify coverage
	count = 0;

	invalidFixturesFiles.forEach( ( file ) => {
		invalidFixtures += fs.readFileSync( file ).toString();
	} );

	testPositivesFailures = fs.readFileSync( `${__dirname}/fixtures/${profileName}/positiveFailures.json` );
	Object.keys( rules ).forEach( ( rule ) => {
		const rDisableRule = new RegExp( `(/[/*]|<!--) eslint-disable(-next-line)? ([a-z-/]+, )??${rule}` );
		// Positive rules are covered above
		if (
			( rule.match( /^no-|\/no-/ ) && rules[ rule ] !== 'off' ) ||
			testPositivesFailures.indexOf( rule ) !== -1
		) {
			count++;
			assertDiff( rDisableRule.test( invalidFixtures.toString() ), `Rule ${rule} is covered` );
		}
	} );
	console.log( `\tNegative rules (${count}) covered.` );

	console.log( `\t✅ The "${profileName}" profile suite is fully covered.\n` );
} );
