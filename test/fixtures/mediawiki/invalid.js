( function () {
	var bar = 'bar';

	// eslint-disable-next-line mediawiki/class-doc
	document.body.classList.add( 'foo-' + bar );

	// eslint-disable-next-line mediawiki/msg-doc
	mw.msg( 'foo-' + bar );

	// eslint-disable-next-line mediawiki/valid-package-file-require
	require( './valid' );

	// eslint-disable-next-line mediawiki/valid-package-file-require
	require( 'valid.js' );
}() );
