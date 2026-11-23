'use strict';

const wikimedia = require( '../../../../flat' );

module.exports = [
	...wikimedia( 'vue/es6' ),
	{
		languageOptions: {
			globals: {
				module: 'readonly'
			}
		}
	}
];
