( function () {

	// Global: $
	// Valid: no-jquery/no-animate ignores scroll properties
	$( [] ).animate( { scrollTop: 50 } );
	$( [] ).animate( { scrollLeft: 50 } );
	$( [] ).animate( { scrollTop: 50, scrollLeft: 50 } );

	// Valid: no-jquery/no-animate ignores stop() and finish() calls because we have allowScroll set
	$( [] ).stop();
	$( [] ).finish();

	// Valid: no-jquery/no-extend ignores deep copy
	$.extend( true, {}, {} );

}() );
