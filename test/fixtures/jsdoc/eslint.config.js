'use strict';

const wikimedia = require( '../../../flat' );

module.exports = [
	...wikimedia( 'client/es6', 'jquery', 'jsdoc' ),
	{
		rules: {
			'no-implicit-globals': 'off'
		}
	}
];
