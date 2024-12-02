/* eslint-disable no-unused-expressions */
( function () {
	var $div, div, $x;

	function f() {}

	// Local rules
	// eslint-disable-next-line no-jquery/no-animate
	$( [] ).animate( { opacity: 0.5 } );

	// eslint-disable-next-line no-jquery/no-animate
	$( [] ).animate( { opacity: 0.5, scrollTop: 50 } );

	// eslint-disable-next-line no-jquery/no-animate-toggle
	$( [] ).show( true );

	// eslint-disable-next-line no-jquery/no-class-state
	$( [] ).hasClass();

	// eslint-disable-next-line no-jquery/no-constructor-attributes
	$( '<div>', { id: 'foo' } );

	// eslint-disable-next-line no-jquery/no-each-util
	$.each( [], function () {} );

	// eslint-disable-next-line no-jquery/no-error
	$.error( 'err' );

	// eslint-disable-next-line no-jquery/no-extend
	$.extend( {}, {} );
	// Deep copy allowed
	$.extend( true, {}, {} );

	// eslint-disable-next-line no-jquery/no-fade
	$( [] ).fadeIn();

	// eslint-disable-next-line no-jquery/no-global-eval
	$.globalEval( 'x=3' );

	// eslint-disable-next-line no-jquery/no-global-selector
	$( '.my-class' );

	// eslint-disable-next-line no-jquery/no-grep
	$.grep( [ 1, 2, 3 ], function () {} );

	// eslint-disable-next-line no-jquery/no-in-array
	$.inArray( 1, [ 1 ] );

	// eslint-disable-next-line no-jquery/no-map-util
	$.map( [ 1 ], function () {} );

	// eslint-disable-next-line no-jquery/no-noop
	f( $.noop );

	// eslint-disable-next-line no-jquery/no-parse-html-literal
	$( '<tag attr="val">' );

	// Includes positional selectors, unlike deprecated
	// eslint-disable-next-line no-jquery/no-sizzle
	$x.find( ':first' );

	// eslint-disable-next-line no-jquery/no-slide
	$( [] ).slideDown();

	// eslint-disable-next-line no-jquery/no-trim
	$.trim( ' foo ' );

	// eslint-disable-next-line no-jquery/no-done-fail
	$.promise().done( function () {} );

	// Recommended
	// eslint-disable-next-line no-jquery/variable-pattern
	div = $div.find( '.foo' );
	div.hide();

	// Deprecated
	/* 3.5 */
	// eslint-disable-next-line no-jquery/no-event-shorthand
	$x.ajaxStart();

	/* 3.4 */
	// (Only non-positional are deprecated)
	// eslint-disable-next-line no-jquery/no-sizzle
	$x.find( ':visible' );

	/* 3.3 */
	// eslint-disable-next-line no-jquery/no-camel-case
	$.camelCase();

	// eslint-disable-next-line no-jquery/no-event-shorthand
	$x.click();

	// eslint-disable-next-line no-jquery/no-is-function
	$.isFunction();

	// eslint-disable-next-line no-jquery/no-is-numeric
	$.isNumeric();

	// eslint-disable-next-line no-jquery/no-is-window
	$.isWindow();

	// eslint-disable-next-line no-jquery/no-now
	$.now();

	// eslint-disable-next-line no-jquery/no-proxy
	$.proxy();

	// eslint-disable-next-line no-jquery/no-type
	$.type();

	/* 3.2 */
	// eslint-disable-next-line no-jquery/no-hold-ready
	$.holdReady();

	// eslint-disable-next-line no-jquery/no-is-array
	$.isArray();

	// eslint-disable-next-line no-jquery/no-node-name
	$.nodeName();

	/* 3.0 */
	// eslint-disable-next-line no-jquery/no-bind
	$x.bind();

	// eslint-disable-next-line no-jquery/no-delegate
	$x.delegate();

	// eslint-disable-next-line no-jquery/no-fx-interval
	$.fx.interval;

	// eslint-disable-next-line no-jquery/no-parse-json
	$.parseJSON();

	// eslint-disable-next-line no-jquery/no-ready-shorthand
	$x.ready();

	// eslint-disable-next-line no-jquery/no-unique
	$.unique();

	/* 1.10 */
	// eslint-disable-next-line no-jquery/no-context-prop
	$x.context;

	/* 1.9 */
	// eslint-disable-next-line no-jquery/no-support
	$.support;

	/* 1.8 */
	// eslint-disable-next-line no-jquery/no-and-self
	$x.andSelf();

	// eslint-disable-next-line no-jquery/no-error-shorthand, no-jquery/no-event-shorthand
	$x.error( f );

	// eslint-disable-next-line no-jquery/no-load-shorthand
	$x.load( function () {} );

	// eslint-disable-next-line no-jquery/no-on-ready
	$( document ).on( 'ready', function () {} );

	// eslint-disable-next-line no-jquery/no-size
	$x.size();

	// eslint-disable-next-line no-jquery/no-unload-shorthand, no-jquery/no-event-shorthand
	$x.unload( f );

	/* 1.7 */
	// eslint-disable-next-line no-jquery/no-live
	$x.live( f );

	// eslint-disable-next-line no-jquery/no-sub
	$.sub();

	// eslint-disable-next-line no-jquery/no-selector-prop
	$x.selector;

	/* 1.3 */
	// eslint-disable-next-line no-jquery/no-box-model
	$.boxModel.style;

	// eslint-disable-next-line no-jquery/no-browser
	$.browser;

}() );
