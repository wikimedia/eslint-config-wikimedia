( function () {

	// Valid: no-jquery/no-animate ignores scroll properties
	$( [] ).animate( { scrollTop: 50 } );
	$( [] ).animate( { scrollLeft: 50 } );
	$( [] ).animate( { scrollTop: 50, scrollLeft: 50 } );

}() );
