( function () {
	var bar = 'bar1';

	// Rule: mediawiki/msg-doc
	// The following messages are used here:
	// * foo-bar1
	// * foo-bar2
	mw.msg( 'foo-' + bar );

	// Rule: mediawiki/valid-package-file-require
	require( './foo.js' );
}() );
