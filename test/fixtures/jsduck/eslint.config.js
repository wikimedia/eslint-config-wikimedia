'use strict';

const wikimedia = require( '../../../flat' );

module.exports = [
	...wikimedia( 'client', 'jsduck' ),
	{
		rules: {
			'no-implicit-globals': 'off'
		}
	}
];
