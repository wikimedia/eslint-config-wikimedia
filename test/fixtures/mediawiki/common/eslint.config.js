'use strict';

const wikimedia = require( '../../../../flat' );

module.exports = [
	...wikimedia( 'client', 'mediawiki' ),
	{
		rules: {
			'json-es/use-valid-json': 'off'
		}
	}
];
