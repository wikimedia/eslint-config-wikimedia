( function () {
	var bar = 'bar1';

	// Global: OO
	OO.ui.alert( 'hello' );

	// Valid: mediawiki/class-doc
	// The following classes are used here:
	// * foo-bar1
	// * foo-bar2
	document.body.classList.add( 'foo-' + bar );

	// Global: mw
	// Valid: mediawiki/msg-doc
	// The following messages are used here:
	// * foo-bar1
	// * foo-bar2
	// * extension-reallylongextensionname-dialog-subfeature-process-myoptionwidget-pending-modifier-label-3
	//   * extension-reallylongextensionname-dialog-subfeature-process-myoptionwidget-pending-modifier-label-3b
	mw.msg( 'foo-' + bar );

	// Global: require
	// Valid: mediawiki/valid-package-file-require
	require( './invalid.js' );
	require( './../test.js' );
	require( 'SomePackage' );
}() );

// Global: module
// Global: exports
module.exports = exports = {};
