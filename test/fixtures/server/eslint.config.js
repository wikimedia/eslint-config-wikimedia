'use strict';

const wikimedia = require( '../../../flat' );

module.exports = [
	...wikimedia( 'server' ),
	{
		rules: {
			'no-unused-vars': 'off'
		}
	}
];
