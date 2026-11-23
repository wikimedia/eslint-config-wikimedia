'use strict';

const wikimedia = require( '../../../flat' );

module.exports = [
	...wikimedia( 'common' ),
	{
		rules: {
			'json-es/use-valid-json': 'off'
		}
	}
];
