( function ( userInput ) {
	function checkHash( input, cachedValue ) {
		var hash = JSON.stringify( input );
		// Off: security/detect-possible-timing-attacks (#503)
		if ( hash === cachedValue ) {
			return true;
		}
	}

	checkHash(
		// Off: security/detect-non-literal-regexp
		new RegExp( '/[0-9]+' + userInput + '/' ),
		// Off: security/detect-unsafe-regex
		/^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
	);

}() );
