( function () {
	var bar = 'bar';

	// eslint-disable-next-line mediawiki/msg-doc
	mw.msg( 'foo-' + bar );

	// eslint-disable-next-line mediawiki/valid-package-file-require
	require( './foo' );
}() );
