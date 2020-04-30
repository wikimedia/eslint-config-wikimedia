( function () {
	var bar = 'bar1';

	// Rule: mediawiki/class-doc
	// The following classes are used here:
	// * foo-bar1
	// * foo-bar2
	document.body.classList.add( 'foo-' + bar );

	// Rule: mediawiki/msg-doc
	// The following messages are used here:
	// * foo-bar1
	// * foo-bar2
	mw.msg( 'foo-' + bar );

	// Rule: mediawiki/valid-package-file-require
	require( './invalid.js' );
	require( './../test.js' );
	require( 'SomePackage' );
}() );
