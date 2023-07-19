( function () {
	// eslint-disable-next-line jsdoc/multiline-blocks
	/** No text on 0th line
	 * ...
	 */

	/* eslint-disable jsdoc/no-multi-asterisks */
	// eslint-disable-next-line jsdoc/multiline-blocks
	/**
	 * ...
	 ** No multiple asterisks
	 No text on last line */
	/* eslint-enable jsdoc/no-multi-asterisks */

	/* eslint-disable jsdoc/check-property-names */
	/**
	 * @property {Function} APP
	 * @property {Function} APP
	 */
	let APP;
	/* eslint-enable jsdoc/check-property-names */

	// eslint-disable-next-line jsdoc/require-property-type
	/**
	 * @property Bar
	 */

	// eslint-disable-next-line jsdoc/check-param-names, jsdoc/valid-types, jsdoc/require-param
	/**
	 * @param {Array<string} foo
	 * @return {string}
	 */
	APP.method = function ( bar ) {
		return bar;
	};

	// eslint-disable-next-line jsdoc/require-param-name, jsdoc/require-param-type
	/**
	 * @param
	 */
	APP.method = function () {
	};

	// eslint-disable-next-line jsdoc/require-param-type, jsdoc/require-returns
	/**
	 * @param bar
	 */
	APP.method = function ( bar ) {
		return bar;
	};

	// eslint-disable-next-line jsdoc/require-param-name, jsdoc/require-returns-check
	/**
	 * @param {Object}
	 * @return {number}
	 */
	APP.method = function () {
	};

	/* eslint-disable jsdoc/require-returns, jsdoc/require-returns-check */
	/**
	 * @return {Object} foo
	 * @return {number} foo.bar
	 */
	APP.method = function () {
		return { bar: 7 };
	};
	/* eslint-enable jsdoc/require-returns, jsdoc/require-returns-check */

	/* eslint-disable jsdoc/require-asterisk-prefix */
	// eslint-disable-next-line jsdoc/implements-on-classes
	/**
	 @implements {HTMLElement}
	 */
	APP.method = function ( bar ) {
		return bar;
	};
	/* eslint-enable jsdoc/require-asterisk-prefix */

	// eslint-disable-next-line jsdoc/require-returns-type
	/**
	 * @return
	 */
	APP.method = function () {
		return 7;
	};

	// eslint-disable-next-line jsdoc/newline-after-description
	/**
	 * Description
	 * @param {Object} bar
	 * @param {string} bar.module `module` property threw an error in eslint-plugin-jsdoc<37.5.0
	 * @return {number}
	 */
	APP.method = function ( bar ) {
		return bar;
	};

	// eslint-disable-next-line jsdoc/check-access
	/**
	 * @public
	 * @private
	 */
	APP.method = function () {
	};

	// eslint-disable-next-line jsdoc/require-yields
	/**
	 * @param {number} foo
	 */
	APP.async = function * quux( foo ) {
		yield foo;
	};

	// eslint-disable-next-line jsdoc/require-yields-check
	/**
	 * @yield {number}
	 */
	APP.async = function * quux() {
	};

	// eslint-disable-next-line jsdoc/check-alignment
	/**
	* @param {number} a
	 */

	// eslint-disable-next-line jsdoc/check-alignment
	/**
	  * @param {number} a
	 */

	/* eslint-disable jsdoc/check-alignment */
	/**
	 * @param {number} a
	*/
	/* eslint-enable jsdoc/check-alignment */

	// eslint-disable-next-line jsdoc/no-undefined-types, jsdoc/check-types
	/**
	 * @param {Undefined} d
	 */

	// eslint-disable-next-line jsdoc/no-undefined-types, jsdoc/check-types
	/**
	 * @param {Null} e
	 */

	// eslint-disable-next-line jsdoc/no-undefined-types, jsdoc/check-types
	/**
	 * @param {array} g
	 */

	// eslint-disable-next-line jsdoc/no-undefined-types, jsdoc/check-types
	/**
	 * @param {date} i
	 */

	// eslint-disable-next-line jsdoc/no-undefined-types, jsdoc/check-types
	/**
	 * @param {regexp} j
	 */

	// eslint-disable-next-line jsdoc/no-undefined-types, jsdoc/check-types
	/**
	 * @param {error}
	 */

	// eslint-disable-next-line jsdoc/check-types
	/**
	 * @param {Boolean} a
	 */

	// eslint-disable-next-line jsdoc/check-types
	/**
	 * @param {Number} b
	 */

	// eslint-disable-next-line jsdoc/check-types
	/**
	 * @param {String} c
	 */

	// eslint-disable-next-line jsdoc/check-types
	/**
	 * @param {object} f
	 */

	// eslint-disable-next-line jsdoc/check-types
	/**
	 * @param {function} h
	 */

	// eslint-disable-next-line jsdoc/check-tag-names
	/**
	 * @virtual
	 */

	// eslint-disable-next-line jsdoc/check-tag-names
	/**
	 * @augments String
	 */

	// eslint-disable-next-line jsdoc/check-tag-names
	/**
	 * @defaultvalue
	 */

	// eslint-disable-next-line jsdoc/check-tag-names
	/**
	 * @host String
	 */

	// eslint-disable-next-line jsdoc/check-tag-names
	/**
	 * @fileoverview Description.
	 */

	// eslint-disable-next-line jsdoc/check-tag-names
	/**
	 * @overview Description.
	 */

	// eslint-disable-next-line jsdoc/check-tag-names
	/**
	 * @emits Event
	 */

	// eslint-disable-next-line jsdoc/check-tag-names
	/**
	 * @function
	 */

	// eslint-disable-next-line jsdoc/check-tag-names
	/**
	 * @func
	 */

	// eslint-disable-next-line jsdoc/check-tag-names
	/**
	 * @var
	 */

	// eslint-disable-next-line jsdoc/check-tag-names
	/**
	 * @arg {number} a
	 */

	// eslint-disable-next-line jsdoc/check-tag-names
	/**
	 * @argument {number} b
	 */

	// eslint-disable-next-line jsdoc/check-tag-names
	/**
	 * @prop {number} c
	 */

	// eslint-disable-next-line jsdoc/check-tag-names
	/**
	 * @returns {number}
	 */

	// eslint-disable-next-line jsdoc/check-tag-names
	/**
	 * @exception {Error}
	 */

	// eslint-disable-next-line jsdoc/check-tag-names
	/**
	 * @const
	 */

	// eslint-disable-next-line jsdoc/check-tag-names
	/**
	 * @desc
	 */

	// eslint-disable-next-line jsdoc/check-tag-names
	/**
	 * @linkcode
	 */

	// eslint-disable-next-line jsdoc/check-tag-names
	/**
	 * @linkplain
	 */

	// eslint-disable-next-line jsdoc/check-tag-names
	/**
	 * @yields
	 */

	// eslint-disable-next-line jsdoc/check-tag-names
	/**
	 * @context
	 */

	// eslint-disable-next-line jsdoc/check-tag-names
	/**
	 * @alternateClassName
	 */

	// @type is allowed in jsdoc and jsduck

}( this ) );
