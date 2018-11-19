/* eslint-env browser */

( function () {

	// eslint-disable-next-line jquery/no-each
	$.each( [], function () {} );

	// eslint-disable-next-line jquery/no-grep
	$.grep( [ 1, 2, 3 ], function () {} );

	// eslint-disable-next-line jquery/no-in-array
	$.inArray( 1, [ 1 ] );

	// eslint-disable-next-line jquery/no-is-function
	$.isFunction( function () {} );

	// eslint-disable-next-line jquery/no-map
	$.map( [ 1 ], function () {} );

	// eslint-disable-next-line jquery/no-proxy
	$.proxy( function () {}, this );

	// eslint-disable-next-line jquery/no-trim
	$.trim( ' foo ' );

}() );
