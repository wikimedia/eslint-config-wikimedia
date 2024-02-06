( function () {
	// Off: es-x/no-resizable-and-growable-arraybuffers (#555)
	function resize( input, cachedValue ) {
		var hash = JSON.stringify( input );
		// Off: security/detect-possible-timing-attacks (#503)
		if ( hash === cachedValue ) {
			return true;
		}
	}

	resize();
}() );
