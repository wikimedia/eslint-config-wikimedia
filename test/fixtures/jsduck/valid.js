( function () {
	var APP;

	// In jsduck environments we need to support this use case
	// to document complex returns, however this triggers
	// require-returns and require-returns check:

	// Off: jsdoc/require-returns
	// Off: jsdoc/require-returns-check
	/**
	 * @return {Object} foo
	 * @return {number} foo.bar
	 */
	APP.method = function () {
		return { bar: 7 };
	};

	// These means we can't catch the following errors:

	// Off: jsdoc/require-returns
	/**
	 * @param {number} bar
	 */
	APP.method = function ( bar ) {
		return { bar: bar };
	};

	// Off: jsdoc/require-returns-check
	/**
	 * @return {number}
	 */
	APP.method = function () {
	};

	// Some different aliases are used in jsduck:
	/**
	 * @alternateClassName otherName
	 * @type {Object}
	 */
	APP.method = function () {
	};

}( this ) );
