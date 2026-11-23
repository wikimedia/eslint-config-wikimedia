'use strict';

const { defineConfig } = require( 'eslint/config' );
const yml = require( 'eslint-plugin-yml' );
const { named } = require( './lib/utils' );

module.exports = defineConfig( {
	name: 'wikimedia/yaml',
	extends: [ named( 'yml/standard', yml.configs[ 'flat/standard' ] ) ],
	rules: {
		'yml/flow-sequence-bracket-spacing': [ 'error', 'always' ],
		'yml/flow-mapping-curly-spacing': [ 'error', 'always' ]
	}
} );
