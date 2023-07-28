( function () {
	function checkHash( input, cachedValue ) {
		var hash = JSON.stringify( input );
		// Off: security/detect-possible-timing-attacks (#503)
		if ( hash === cachedValue ) {
			return true;
		}
	}

	checkHash();
}() );
