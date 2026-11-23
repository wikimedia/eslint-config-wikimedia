'use strict';

const wikimedia = require( '../../../flat' );

module.exports = [
	...wikimedia( 'selenium' ),
	{
		rules: {
			'no-unused-vars': 'off'
		}
	}
];
