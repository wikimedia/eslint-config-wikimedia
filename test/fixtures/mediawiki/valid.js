( function () {
	var bar = 'bar1';

	// Valid: mediawiki/class-doc
	// The following classes are used here:
	// * foo-bar1
	// * foo-bar2
	document.body.classList.add( 'foo-' + bar );

	// Valid: mediawiki/msg-doc
	// The following messages are used here:
	// * foo-bar1
	// * foo-bar2
	mw.msg( 'foo-' + bar );

	// Valid: mediawiki/valid-package-file-require
	require( './invalid.js' );
	require( './../test.js' );
	require( 'SomePackage' );
}() );
