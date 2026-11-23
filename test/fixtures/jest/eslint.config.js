'use strict';

const wikimedia = require( '../../../flat' );

module.exports = [
	...wikimedia( 'client/es6', 'mediawiki', 'jest' )
];
