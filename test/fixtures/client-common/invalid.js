/* eslint-env browser */

( function () {
	// eslint-disable-next-line no-alert
	window.alert( name );

	// eslint-disable-next-line no-console
	console.log( name );

	// eslint-disable-next-line no-implied-eval
	setTimeout( name + '();' );
}() );
