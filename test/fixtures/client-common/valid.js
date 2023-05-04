/* eslint-env browser */

// eslint-disable-next-line no-implicit-globals, no-unused-vars
function checkHash( input, cachedValue ) {
	var hash = JSON.stringify( input );
	// Off: security/detect-possible-timing-attacks (#503)
	if ( hash === cachedValue ) {
		return true;
	}
}
