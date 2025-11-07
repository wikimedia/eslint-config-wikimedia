( function () {
	let bar = 'bar';

	// eslint-disable-next-line mediawiki/class-doc
	document.body.classList.add( 'foo-' + bar );

	// eslint-disable-next-line mediawiki/msg-doc
	mw.msg( 'foo-' + bar );

	// eslint-disable-next-line mediawiki/no-cookie
	document.cookie = 'foo=bar';

	// eslint-disable-next-line mediawiki/no-storage
	localStorage.getItem( 'foo' );

	// eslint-disable-next-line mediawiki/storage-expiry
	mw.storage( bar, 'foo' );

	// eslint-disable-next-line mediawiki/valid-package-file-require
	require( './valid' );

	// eslint-disable-next-line mediawiki/valid-package-file-require
	require( 'valid.js' );

	// eslint-disable-next-line mediawiki/no-nodelist-unsupported-methods
	document.querySelectorAll( '.foo' ).forEach();

	// eslint-disable-next-line mediawiki/no-unlabeled-buttonwidget
	bar = new OO.ui.ButtonWidget( { icon: 'edit' } );

	// eslint-disable-next-line compat/compat
	bar = navigator.permissions.query();

	// eslint-disable-next-line max-len
	// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a ligula ut felis volutpat venenatis. Vivamus venenatis justo in lectus tempus placerat.
}() );
