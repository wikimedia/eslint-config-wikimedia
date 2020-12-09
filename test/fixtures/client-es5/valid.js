/* eslint-env browser */
( function () {
	var $div;
	// [].find should be disabled, but it conflicts with jQuery
	// Off: es-x/no-array-prototype-find
	$div.find();
}() );
