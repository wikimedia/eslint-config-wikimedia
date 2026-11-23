'use strict';

const wikimedia = require( '../../../flat' );

module.exports = [
	...wikimedia( 'client/common', 'language/es2017', 'qunit' )
];
