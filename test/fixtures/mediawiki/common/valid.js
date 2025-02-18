( function () {
	const bar = 'bar1';

	// Global: OO
	OO.ui.alert( 'hello' );

	// Valid: mediawiki/class-doc
	// The following classes are used here:
	// * foo-bar1
	// * foo-bar2
	document.body.classList.add( 'foo-' + bar );

	// Valid: mediawiki/no-extended-unicode-identifiers
	const α = 13;

	// Global: mw
	// Valid: mediawiki/msg-doc
	// The following messages are used here:
	// * foo-bar1
	// * foo-bar2
	// * extension-reallylongextensionname-dialog-subfeature-process-myoptionwidget-pending-modifier-label-3
	//   * extension-reallylongextensionname-dialog-subfeature-process-myoptionwidget-pending-modifier-label-3b
	mw.msg( 'foo-' + bar + α );

	// Global: require
	// Valid: mediawiki/valid-package-file-require
	require( './invalid.js' );
	require( './../test.js' );
	require( 'SomePackage' );

	// Valid: mediawiki/no-nodelist-unsupported-methods
	[].forEach();
}() );

// Global: module
// Global: exports
module.exports = exports = {};
