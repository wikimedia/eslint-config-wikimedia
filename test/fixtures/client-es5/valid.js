/* eslint-env browser */
( function () {
	var $div;
	// [].find should be disabled, but it conflicts with jQuery
	// Off: es-x/no-array-prototype-find
	$div.find(
		// Symbol.prototype.descrition is disabled, but conflicts
		// with many plain object properties.
		// Off: es-x/no-symbol-prototype-description
		$div.description
	);

}() );
