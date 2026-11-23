'use strict';

/* eslint-disable security/detect-non-literal-fs-filename, security/detect-non-literal-require */

const fs = require( 'fs' ),
	os = require( 'os' ),
	path = require( 'path' ),
	packageFiles = require( '../package' ).files,
	configs = [],
	escapeStringRegexp = require( 'escape-string-regexp' ),
	readdirRecursive = require( 'fs-readdir-recursive' ),
	globals = require( 'globals' ),
	{ ESLint } = require( 'eslint' ),
	wikimedia = require( '../flat' );

const root = path.resolve( __dirname, '..' );
const fixturesRoot = path.resolve( __dirname, 'fixtures' );

packageFiles.forEach( ( packageFile ) => {
	if ( !fs.existsSync( packageFile ) || packageFile === 'lib/' ) {
		return;
	}
	if ( fs.lstatSync( packageFile ).isDirectory() ) {
		configs.push.apply(
			configs,
			readdirRecursive( packageFile )
				.filter( ( file ) => file.endsWith( '.js' ) )
				.map( ( file ) => path.join( packageFile, file ) )
		);
	} else {
		configs.push( packageFile );
	}
} );

/**
 * Get the config objects of a config, that come from its own file or from upstream configs.
 *
 * Config object names show where each object comes from, e.g.
 * 'wikimedia/client/common > wikimedia/common > eslint/recommended'.
 *
 * @param {string} configName Config name, e.g. 'client/common'
 * @param {boolean} upstream Get the objects from upstream (plugin) configs
 *  that the config extends directly, instead of the config's own objects
 * @return {Object[]} Flat config objects
 */
function getConfigObjects( configName, upstream ) {
	const name = `wikimedia/${ configName }`;
	return require( `../${ configName }` ).filter( ( config ) => {
		const parts = ( config.name || '' ).split( ' > ' );
		const i = parts.lastIndexOf( name );
		if ( !upstream ) {
			return i !== -1 && i === parts.length - 1;
		}
		return i !== -1 && i < parts.length - 1 && !parts[ i + 1 ].startsWith( 'wikimedia/' );
	} );
}

// Globals of environments, e.g. "browser". The fixtures do not document these.
const envGlobals = new Set(
	[ 'browser', 'commonjs', 'jest', 'mocha', 'node', 'nodeBuiltin', 'qunit' ]
		.flatMap( ( env ) => Object.keys( globals[ env ] ) )
);

function getRulesAndGlobals( configName, upstream ) {
	const rules = {};
	const configGlobals = {};
	getConfigObjects( configName, upstream ).forEach( ( config ) => {
		Object.assign( rules, config.rules );
		const configObjectGlobals = ( config.languageOptions || {} ).globals || {};
		Object.entries( configObjectGlobals ).forEach( ( [ name, value ] ) => {
			if ( !upstream || !envGlobals.has( name ) ) {
				configGlobals[ name ] = value;
			}
		} );
	} );
	return { rules, globals: configGlobals };
}

function merge( ...list ) {
	return {
		rules: Object.assign( {}, ...list.map( ( item ) => item.rules ) ),
		globals: Object.assign( {}, ...list.map( ( item ) => item.globals ) )
	};
}

function getMessages( results ) {
	return results.map( ( result ) => ( {
		file: path.relative( root, result.filePath ),
		messages: result.messages.map( ( m ) => `${ m.line }:${ m.column } ${ m.ruleId }: ${ m.message }` )
	} ) );
}

const ignoreTests = [
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

QUnit.module( 'Fixtures', () => {
	readdirRecursive( fixturesRoot )
		.filter( ( file ) => path.basename( file ) === 'eslint.config.js' )
		.forEach( ( configFile ) => {
			const dir = path.resolve( fixturesRoot, path.dirname( configFile ) );
			// Each invalid fixture disables every error it causes, and unused disables are errors,
			// so all fixtures must lint with no messages.
			QUnit.test( `Fixtures in "${ path.relative( root, dir ) }" have no errors`, async ( assert ) => {
				assert.timeout( 30000 );
				const files = fs.readdirSync( dir )
					.filter( ( file ) => /^(in)?valid/.test( file ) )
					.map( ( file ) => path.join( dir, file ) );
				const results = await new ESLint( { cwd: dir } ).lintFiles( files );
				assert.deepEqual(
					getMessages( results ).filter( ( result ) => result.messages.length ),
					[]
				);
			} );
		} );

	QUnit.test( 'Fixtures outside this package have no errors', async ( assert ) => {
		assert.timeout( 30000 );
		const dir = fs.mkdtempSync( path.join( os.tmpdir(), 'eslint-config-wikimedia-' ) );
		[ 'json', 'typescript', 'yaml' ].forEach( ( type ) => {
			const typeDir = path.join( fixturesRoot, type );
			fs.readdirSync( typeDir )
				.filter( ( file ) => /^(in)?valid/.test( file ) )
				.forEach( ( file ) => fs.copyFileSync(
					path.join( typeDir, file ), path.join( dir, file )
				) );
		} );
		try {
			const results = await new ESLint( {
				cwd: dir,
				// The cache serialises the config. This makes sure that all parsers have "meta".
				cache: true,
				cacheLocation: path.join( dir, '.eslintcache' ),
				overrideConfigFile: true,
				overrideConfig: [
					...wikimedia( 'common' ),
					// Same as test/fixtures/json/eslint.config.js
					{ files: [ '**/*.jsonc' ], rules: { 'json-es/use-valid-json': 'off' } }
				]
			} ).lintFiles( dir );
			assert.deepEqual(
				getMessages( results ).filter( ( result ) => result.messages.length ),
				[]
			);
		} finally {
			fs.rmSync( dir, { recursive: true } );
		}
	} );
} );

QUnit.module( 'Ignores', () => {
	QUnit.test( 'Check dotfiles are linted', async ( assert ) => {
		const eslint = new ESLint( { overrideConfigFile: true, overrideConfig: wikimedia( 'common' ) } );
		for ( const test of ignoreTests ) {
			assert.strictEqual( await eslint.isPathIgnored( test.path ), test.ignored, `Is ${ test.path } ignored` );
		}
	} );

	QUnit.test( 'Default ignores', async ( assert ) => {
		const tests = [
			{ path: 'vendor/foo.js', ignored: true },
			{ path: 'coverage/foo.js', ignored: true },
			{ path: 'package-lock.json', ignored: true },
			{ path: 'tests/package-lock.json', ignored: true },
			{ path: 'i18n/fr.json', ignored: true },
			{ path: 'i18n/api/fr.json', ignored: true },
			{ path: 'languages/i18n/fr.json', ignored: true },
			{ path: 'i18n/en.json', ignored: false },
			{ path: 'i18n/qqq.json', ignored: false },
			{ path: 'i18n/api/qqq.json', ignored: false },
			{ path: 'package.json', ignored: false },
			{ path: 'src/vendor/foo.js', ignored: false },
			{ path: 'src/foo.js', ignored: false }
		];
		const eslint = new ESLint( { overrideConfigFile: true, overrideConfig: wikimedia( 'common' ) } );
		for ( const test of tests ) {
			assert.strictEqual( await eslint.isPathIgnored( test.path ), test.ignored, `Is ${ test.path } ignored` );
		}

		const extendedEslint = new ESLint( {
			overrideConfigFile: true,
			overrideConfig: [
				...wikimedia( 'common' ),
				{ ignores: [ 'lib/', '!package-lock.json', '!i18n/fr.json' ] }
			]
		} );
		assert.true( await extendedEslint.isPathIgnored( 'lib/foo.js' ), 'Downstream ignores are added' );
		assert.false( await extendedEslint.isPathIgnored( 'package-lock.json' ), 'Default ignores can be negated' );
		assert.false( await extendedEslint.isPathIgnored( 'i18n/fr.json' ), 'Default ignores can be negated' );
		assert.true( await extendedEslint.isPathIgnored( 'i18n/de.json' ), 'Other default ignores apply' );
	} );

	QUnit.test( 'Files outside this package are not ignored', async ( assert ) => {
		const eslint = new ESLint( {
			cwd: os.tmpdir(),
			overrideConfigFile: true,
			overrideConfig: wikimedia( 'common' )
		} );
		assert.false( await eslint.isPathIgnored( 'x.js' ) );
	} );
} );

QUnit.module( 'Upstream', () => {
	QUnit.test( 'eslint-plugin-json-es has no meta.name', ( assert ) => {
		const { meta } = require( 'eslint-plugin-json-es' );
		assert.false(
			Boolean( meta && meta.name ),
			'eslint-plugin-json-es now has meta.name; remove the parser replacement from json.js'
		);
	} );
} );

QUnit.module( 'package.json', () => {
	QUnit.test( 'All files are listed', ( assert ) => {
		const excludeList = [
			'eslint.config.js',
			'package.json',
			'package-lock.json'
		];
		fs.readdirSync( root ).forEach( ( file ) => {
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
			assert.true( fs.existsSync( path.join( root, file ) ), `"${ file }" found` );
		} );
	} );
} );

const aliases = [
	'flat',
	'client',
	'mediawiki'
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

		const fixturesFiles = readdirRecursive( fixturesDir )
			.filter( ( file ) => path.basename( file ) !== 'eslint.config.js' )
			.map( ( file ) => path.resolve( fixturesDir, file ) );

		const validFixturesFiles = fixturesFiles.filter( ( file ) => file.includes( '/valid' ) );
		const invalidFixturesFiles = fixturesFiles.filter( ( file ) => file.includes( '/invalid' ) );

		let { rules, globals: configGlobals } = getRulesAndGlobals( configName );

		if ( configName === 'server' ) {
			// Load the rules for Node & ES2018 when testing server
			( { rules, globals: configGlobals } = merge(
				getRulesAndGlobals( 'node', true ),
				{ rules, globals: configGlobals },
				getRulesAndGlobals( 'node' ),
				getRulesAndGlobals( 'language/es2018' ),
				// TODO: Traverse "extends" automatically
				getRulesAndGlobals( 'language/rules-es2018' ),
				getRulesAndGlobals( 'language/rules-es2017' )
				// ES6 rules are tested in client-es6
			) );
		}

		if ( configName === 'client/es6' ) {
			// Load the rules for ES6 when testing client
			Object.assign(
				rules,
				require( 'eslint-plugin-es-x' ).configs[ 'flat/no-new-in-es2016' ].rules,
				getRulesAndGlobals( 'language/es6' ).rules
			);
		}

		if ( upstreamConfigsToTest.includes( configName ) ) {
			( { rules, globals: configGlobals } = merge(
				getRulesAndGlobals( configName, true ),
				{ rules, globals: configGlobals }
			) );
		}

		function isEnabled( rule ) {
			const value = Array.isArray( rules[ rule ] ) ? rules[ rule ][ 0 ] : rules[ rule ];
			return value !== 'off' && value !== 0;
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

		Object.keys( configGlobals ).forEach( ( global ) => {
			// eslint-disable-next-line security/detect-non-literal-regexp
			const globalPattern = new RegExp( `Global: ${ escapeStringRegexp( global ) }(\n|$)` );
			if ( configGlobals[ global ] !== 'off' ) {
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
