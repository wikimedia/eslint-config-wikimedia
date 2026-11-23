'use strict';

const wikimedia = require( '../../../../flat' );

module.exports = [
	...wikimedia( 'vue3/common' ),
	{
		languageOptions: {
			globals: {
				module: 'readonly'
			}
		}
	}
];
