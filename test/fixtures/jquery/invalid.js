( function () {
	var $div, div;

	function f() {}

	// eslint-disable-next-line no-jquery/variable-pattern
	div = $div.find( '.foo' );
	div.hide();

	// eslint-disable-next-line no-jquery/no-and-self
	$( [] ).andSelf();

	// eslint-disable-next-line no-jquery/no-animate
	$( [] ).animate( { opacity: 0.5 } );

	// eslint-disable-next-line no-jquery/no-animate
	$( [] ).animate( { opacity: 0.5, scrollTop: 50 } );

	// eslint-disable-next-line no-jquery/no-animate-toggle
	$( [] ).show( true );

	// eslint-disable-next-line no-jquery/no-bind
	$( [] ).bind( 'click', function () {} );

	// eslint-disable-next-line no-jquery/no-bind
	$( [] ).unbind( 'click', function () {} );

	// eslint-disable-next-line no-jquery/no-class-state
	$( [] ).hasClass();

	// eslint-disable-next-line no-jquery/no-constructor-attributes
	$( '<div>', { id: 'foo' } );

	// eslint-disable-next-line no-jquery/no-delegate
	$( [] ).delegate( 'click', function () {} );

	// eslint-disable-next-line no-jquery/no-delegate
	$( [] ).undelegate( 'click', function () {} );

	// eslint-disable-next-line no-jquery/no-each-util
	$.each( [], function () {} );

	// eslint-disable-next-line no-jquery/no-event-shorthand
	$( [] ).click( function () {} );

	// eslint-disable-next-line no-jquery/no-event-shorthand
	$( [] ).keypress( function () {} );

	// eslint-disable-next-line no-jquery/no-event-shorthand
	$( [] ).focus( function () {} );

	// eslint-disable-next-line no-jquery/no-event-shorthand
	$( [] ).scroll( function () {} );

	// eslint-disable-next-line no-jquery/no-error
	$.error( 'err' );

	// eslint-disable-next-line no-jquery/no-fade
	$( [] ).fadeIn();

	// eslint-disable-next-line no-jquery/no-global-eval
	$.globalEval( 'x=3' );

	// eslint-disable-next-line no-jquery/no-global-selector
	$( '.my-class' );

	// eslint-disable-next-line no-jquery/no-grep
	$.grep( [ 1, 2, 3 ], function () {} );

	// eslint-disable-next-line no-jquery/no-hold-ready
	$.holdReady( true );

	// eslint-disable-next-line no-jquery/no-in-array
	$.inArray( 1, [ 1 ] );

	// eslint-disable-next-line no-jquery/no-is-array
	$.isArray( [ 1 ] );

	// eslint-disable-next-line no-jquery/no-is-numeric
	$.isNumeric( '1' );

	// eslint-disable-next-line no-jquery/no-is-function
	$.isFunction( function () {} );

	// eslint-disable-next-line no-jquery/no-is-window
	$.isWindow( window );

	// eslint-disable-next-line no-jquery/no-live
	$( [] ).live( 'click', function () {} );

	// eslint-disable-next-line no-jquery/no-live
	$( [] ).die( 'click', function () {} );

	// eslint-disable-next-line no-jquery/no-map-util
	$.map( [ 1 ], function () {} );

	// eslint-disable-next-line no-jquery/no-noop
	f( $.noop );

	// eslint-disable-next-line no-jquery/no-now
	f( $.now() );

	// eslint-disable-next-line no-jquery/no-parse-html-literal
	$( '<tag attr="val">' );

	// eslint-disable-next-line no-jquery/no-parse-json
	$.parseJSON( '{}' );

	// eslint-disable-next-line no-jquery/no-proxy
	$.proxy( function () {}, this );

	// eslint-disable-next-line no-jquery/no-slide
	$( [] ).slideDown();

	// eslint-disable-next-line no-jquery/no-sizzle
	$div.find( 'input:checkbox' );

	// eslint-disable-next-line no-jquery/no-trim
	$.trim( ' foo ' );

	// eslint-disable-next-line no-jquery/no-type
	$.type( true );

	// eslint-disable-next-line no-jquery/no-unique
	$.unique();

}() );
