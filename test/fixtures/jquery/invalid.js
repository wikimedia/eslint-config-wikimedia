/* eslint-env browser */

( function () {
	function f() {}

	// eslint-disable-next-line jquery/no-and-self
	$( [] ).andSelf();

	// eslint-disable-next-line jquery/no-bind
	$( [] ).bind( 'click', function () {} );

	// eslint-disable-next-line jquery/no-delegate
	$( [] ).delegate( 'click', function () {} );

	// eslint-disable-next-line jquery/no-die
	$( [] ).die( 'click', function () {} );

	// eslint-disable-next-line jquery/no-each-util
	$.each( [], function () {} );

	// eslint-disable-next-line jquery/no-event-shorthand
	$( [] ).click( function () {} );

	// eslint-disable-next-line jquery/no-event-shorthand
	$( [] ).keypress( function () {} );

	// eslint-disable-next-line jquery/no-event-shorthand
	$( [] ).focus( function () {} );

	// eslint-disable-next-line jquery/no-event-shorthand
	$( [] ).scroll( function () {} );

	// eslint-disable-next-line jquery/no-fade
	$( [] ).fadeIn();

	// eslint-disable-next-line jquery/no-global-selector
	$( '.my-class' );

	// eslint-disable-next-line jquery/no-grep
	$.grep( [ 1, 2, 3 ], function () {} );

	// eslint-disable-next-line jquery/no-in-array
	$.inArray( 1, [ 1 ] );

	// eslint-disable-next-line jquery/no-is-array
	$.isArray( [ 1 ] );

	// eslint-disable-next-line jquery/no-is-function
	$.isFunction( function () {} );

	// eslint-disable-next-line jquery/no-is-window
	$.isWindow( window );

	// eslint-disable-next-line jquery/no-live
	$( [] ).live( 'click', function () {} );

	// eslint-disable-next-line jquery/no-map-util
	$.map( [ 1 ], function () {} );

	// eslint-disable-next-line jquery/no-noop
	f( $.noop );

	// eslint-disable-next-line jquery/no-parse-html-literal
	$( '<tag attr="val">' );

	// eslint-disable-next-line jquery/no-parse-json
	$.parseJSON( '{}' );

	// eslint-disable-next-line jquery/no-proxy
	$.proxy( function () {}, this );

	// eslint-disable-next-line jquery/no-size
	$( [] ).size();

	// eslint-disable-next-line jquery/no-trim
	$.trim( ' foo ' );

	// eslint-disable-next-line jquery/no-type
	$.type( true );

	// eslint-disable-next-line jquery/no-unbind
	$( [] ).unbind( 'click', function () {} );

	// eslint-disable-next-line jquery/no-undelegate
	$( [] ).undelegate( 'click', function () {} );

	// eslint-disable-next-line jquery/no-unique
	$.unique();

}() );
