'use strict';

/* eslint-disable security/detect-non-literal-fs-filename */

const fs = require( 'fs' ),
	path = require( 'path' ),
	packageFiles = require( '../package' ).files,
	configs = [],
	escapeStringRegexp = require( 'escape-string-regexp' ),
	readdirRecursive = require( 'fs-readdir-recursive' ),
	{ ESLint } = require( 'eslint' ),
	eslint = new ESLint();

packageFiles.forEach( ( packageFile ) => {
	if ( !fs.existsSync( packageFile ) ) {
		return;
	}
	if ( fs.lstatSync( packageFile ).isDirectory() ) {
		configs.push.apply(
			configs,
			readdirRecursive( packageFile )
				.map( ( file ) => path.join( packageFile, file ) )
		);
	} else {
		configs.push( packageFile );
	}
} );

function getRules( config ) {
	const rules = Object.assign( {}, config.rules );
	if ( config.overrides ) {
		config.overrides.forEach( ( override ) => {
			Object.assign( rules, override.rules );
		} );
	}
	return rules;
}

function extendRules( config, rules, globals ) {
	let extendedRules = {};
	let extendedGlobals = {};
	const extendsList = Array.isArray( config.extends ) ?
		config.extends :
		[ config.extends ];
	// Fetch every upstream config we use via 'extends'.
	extendsList.forEach( ( extend ) => {
		const parts = extend.match( /plugin:(.*)\/([^/]+)/ );
		if ( !parts ) {
			return;
		}
		let upstreamConfigs;
		if ( parts[ 1 ].includes( 'eslint-plugin-' ) ) {
			// eslint-disable-next-line security/detect-non-literal-require
			upstreamConfigs = require( parts[ 1 ] ).configs;
		} else {
			// eslint-disable-next-line security/detect-non-literal-require
			upstreamConfigs = require( 'eslint-plugin-' + parts[ 1 ] ).configs;
		}
		const childConfig = upstreamConfigs[ parts[ 2 ] ];
		Object.assign(
			extendedRules,
			getRules( childConfig )
		);
		Object.assign( extendedGlobals, childConfig.globals );
		if ( childConfig.extends ) {
			( { rules: extendedRules, globals: extendedGlobals } = extendRules(
				childConfig, extendedRules, extendedGlobals
			) );
		}
	} );
	extendedRules = Object.assign( {}, extendedRules, rules );
	extendedGlobals = Object.assign( {}, extendedGlobals, globals );
	return {
		rules: extendedRules,
		globals: extendedGlobals
	};
}

QUnit.module( 'ignorePatterns', () => {
	QUnit.test( 'Check dotfiles are linted', ( assert ) => {
		const tests = [
			// Dot files are linted
			{ path: '.stylelintrc.json', ignored: false },
			{ path: '.eslintrc.json', ignored: false },
			// Dot folders and node_modules are still ignored
			{ path: 'node_modules/foo.js', ignored: true },
			{ path: 'node_modules/.eslintrc.json', ignored: true },
			{ path: '.git/foo.js', ignored: true },
			{ path: '.github/workflow/nodejs.yml', ignored: true },
			{ path: '.github/node_modules/foo.js', ignored: true },
			{ path: '.github/node_modules/.eslintrc.json', ignored: true },
			{ path: '.github/.eslintrc.js', ignored: true },
			{ path: '.dot.folder/foo.js', ignored: true },
			{ path: '.dot.folder/.foo.js', ignored: true }
		];
		const done = assert.async( tests.length );
		tests.forEach( ( test ) => {
			eslint.isPathIgnored( test.path ).then( ( ignored ) => {
				assert.strictEqual( ignored, test.ignored, `Is ${ test.path } ignored` );
				done();
			} );
		} );
	} );
} );

QUnit.module( 'package.json', () => {
	QUnit.test( 'All files are listed', ( assert ) => {
		const excludeList = [
			'.eslintrc.json',
			'package.json',
			'package-lock.json'
		];
		fs.readdirSync( path.resolve( __dirname, '../' ) ).forEach( ( file ) => {
			const ext = path.extname( file );
			if (
				( ext === '.js' || ext === '.json' ) &&
				!excludeList.includes( file )
			) {
				assert.true( packageFiles.includes( file ), `'${ file }' found in package.json's 'files' list` );
			}
		} );
	} );
	QUnit.test( 'All listed files exist', ( assert ) => {
		packageFiles.forEach( ( file ) => {
			assert.true( fs.existsSync( file ), `"${ file }" found` );
		} );
	} );
} );

const aliases = [
	'client',
	'client-common',
	'client-es6',
	'mediawiki',
	'mediawiki-qunit',
	'vue-common',
	'vue-es6',
	'vue2-common',
	'vue2-es6',
	'vue3-common',
	'vue3-es6'
];

configs.forEach( ( configPath ) => {
	const configName = configPath.replace( /\..*/, '' );
	if ( aliases.includes( configName ) ) {
		return;
	}
	const fixturesDir = path.resolve( __dirname, `fixtures/${ configName }` );
	const upstreamConfigsToTest = [
		'jest',
		'jquery',
		'jsdoc',
		'json',
		'mediawiki/common',
		'mocha',
		'qunit',
		'selenium'
	];

	QUnit.module( `"${ configName }" config`, () => {
		if ( !fs.existsSync( fixturesDir ) ) {
			QUnit.test.skip( `No tests for "${ configName }" config` );
			return;
		}

		// eslint-disable-next-line security/detect-non-literal-require
		const config = require( `../${ configPath }` );

		const fixturesFiles = readdirRecursive( fixturesDir )
			.map( ( file ) => path.resolve( fixturesDir, file ) );

		const validFixturesFiles = fixturesFiles.filter( ( file ) => file.includes( '/valid' ) );
		const invalidFixturesFiles = fixturesFiles.filter( ( file ) => file.includes( '/invalid' ) );

		let rules = getRules( config );
		let globals = config.globals || {};

		if ( configName === 'server' ) {
			// Load the rules for Node & ES2018 when testing server
			Object.assign(
				rules,
				getRules( require( '../node' ) ),
				getRules( require( '../language/es2018' ) ),
				// TODO: Traverse "extends" automatically
				getRules( require( '../language/rules-es2018' ) ),
				getRules( require( '../language/rules-es2017' ) )
				// ES6 rules are tested in client-es6
			);

			// Test node's upstream rules
			( { rules, globals } = extendRules( require( '../node' ), rules, globals ) );
		}

		if ( configName === 'client/es6' ) {
			// Load the rules for ES6 when testing client
			Object.assign(
				rules,
				getRules( require( 'eslint-plugin-es-x/lib/configs/no-new-in-es2016' ) ),
				getRules( require( '../language/es6' ) )
			);
		}

		if ( upstreamConfigsToTest.includes( configName ) ) {
			( { rules, globals } = extendRules( config, rules, globals ) );
		}

		function isEnabled( rule ) {
			return rules[ rule ] !== 'off';
		}

		// Invalid examples are required for every rule that is enabled,
		// as reportUnusedDisableDirectives ensures the disable directives
		// are actually being used.
		const invalidFixtures = invalidFixturesFiles.map(
			( file ) => fs.readFileSync( file ).toString()
		).join( '' );

		Object.keys( rules ).forEach( ( rule ) => {
			// Disabled rules are covered below
			if ( isEnabled( rule ) ) {
				QUnit.test( `Rule '${ rule }' is covered in invalid fixture`, ( assert ) => {
					// eslint-disable-next-line security/detect-non-literal-regexp
					const disableRulePattern = new RegExp( `(/[/*]|<!--|#) eslint-disable((-next)?-line)? ([a-z-/]+, )*?${ rule }($|[^a-z-])` );
					assert.true( disableRulePattern.test( invalidFixtures ), 'eslint-disable comment found' );
				} );
			}
		} );

		const validFixtures = validFixturesFiles.map( ( file ) => fs.readFileSync( file ).toString()
		).join( '' );

		QUnit.test( 'Valid fixtures contain no disables', ( assert ) => {
			assert.true( !/eslint-disable(?!.*!allowdisable)/.test( validFixtures ), 'No disables found in valid fixtures' );
		} );

		Object.keys( rules ).forEach( ( rule ) => {
			// eslint-disable-next-line security/detect-non-literal-regexp
			const enableRulePattern = new RegExp( `Off: ${ rule }($|[^a-z-])` );
			if ( !isEnabled( rule ) ) {
				QUnit.test( `Rule '${ rule }' is covered as "off" in valid fixture`, ( assert ) => {
					assert.true( enableRulePattern.test( validFixtures ), '"Off" comment found' );
				} );
			} else {
				QUnit.test( `Rule '${ rule }' is not covered as "off" in valid fixture`, ( assert ) => {
					assert.true( !enableRulePattern.test( validFixtures ), '"Off" comment not present' );
				} );
			}
		} );

		Object.keys( globals ).forEach( ( global ) => {
			// eslint-disable-next-line security/detect-non-literal-regexp
			const globalPattern = new RegExp( `Global: ${ escapeStringRegexp( global ) }(\n|$)` );
			if ( globals[ global ] !== 'off' ) {
				QUnit.test( `Global '${ global }' is documented in valid fixture`, ( assert ) => {
					assert.true( globalPattern.test( validFixtures ), '"Global" comment found' );
				} );
			} else {
				QUnit.test( `Disabled global '${ global }' is documented in invalid fixture`, ( assert ) => {
					assert.true( globalPattern.test( invalidFixtures ), '"Global" comment found' );
				} );
			}
		} );
	} );
} );
