/* eslint-env browser */

( function () {

	// eslint-disable-next-line @wikimedia/jquery/no-each-util
	$.each( [], function () {} );

	// eslint-disable-next-line @wikimedia/jquery/no-grep
	$.grep( [ 1, 2, 3 ], function () {} );

	// eslint-disable-next-line @wikimedia/jquery/no-in-array
	$.inArray( 1, [ 1 ] );

	// eslint-disable-next-line @wikimedia/jquery/no-is-function
	$.isFunction( function () {} );

	// eslint-disable-next-line @wikimedia/jquery/no-map-util
	$.map( [ 1 ], function () {} );

	// eslint-disable-next-line @wikimedia/jquery/no-proxy
	$.proxy( function () {}, this );

	// eslint-disable-next-line @wikimedia/jquery/no-trim
	$.trim( ' foo ' );

}() );
