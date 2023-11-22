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

	/* eslint-disable jsdoc/check-property-names, jsdoc/no-blank-block-descriptions */
	/**
	 *
	 * @property {Function} APP
	 * @property {Function} APP
	 */
	let APP;
	/* eslint-enable jsdoc/check-property-names, jsdoc/no-blank-block-descriptions */

	/* eslint-disable jsdoc/no-blank-blocks */
	/**
	 *
	 */
	/* eslint-enable jsdoc/no-blank-blocks */

	/* eslint-disable jsdoc/require-property-type */
	/**
	 * @property Bar
	 */
	/* eslint-enable jsdoc/require-property-type */

	/* eslint-disable jsdoc/check-param-names, jsdoc/valid-types, jsdoc/require-param */
	/**
	 * @param {Array<string} foo
	 * @return {string}
	 */
	APP.method = function ( bar ) {
		return bar;
	};
	/* eslint-enable jsdoc/check-param-names, jsdoc/valid-types, jsdoc/require-param */

	/* eslint-disable jsdoc/require-param-name, jsdoc/require-param-type */
	/**
	 * @param
	 */
	APP.method = function () {
	};
	/* eslint-enable jsdoc/require-param-name, jsdoc/require-param-type */

	/* eslint-disable jsdoc/require-param-type, jsdoc/require-returns */
	/**
	 * @param bar
	 */
	APP.method = function ( bar ) {
		return bar;
	};
	/* eslint-enable jsdoc/require-param-type, jsdoc/require-returns */

	/* eslint-disable jsdoc/require-param-name, jsdoc/require-returns-check */
	/**
	 * @param {Object}
	 * @return {number}
	 */
	APP.method = function () {
	};
	/* eslint-enable jsdoc/require-param-name, jsdoc/require-returns-check */

	/* eslint-disable jsdoc/require-returns, jsdoc/require-returns-check */
	/**
	 * @return {Object} foo
	 * @return {number} foo.bar
	 */
	APP.method = function () {
		return { bar: 7 };
	};
	/* eslint-enable jsdoc/require-returns, jsdoc/require-returns-check */

	/* eslint-disable jsdoc/implements-on-classes, jsdoc/require-asterisk-prefix */
	/**
	 @implements {HTMLElement}
	 */
	APP.method = function ( bar ) {
		return bar;
	};
	/* eslint-enable jsdoc/implements-on-classes, jsdoc/require-asterisk-prefix */

	/* eslint-disable jsdoc/require-returns-type */
	/**
	 * @return
	 */
	APP.method = function () {
		return 7;
	};
	/* eslint-enable jsdoc/require-returns-type */

	/* eslint-disable jsdoc/tag-lines */
	/**
	 * Description
	 * @param {Object} bar
	 * @param {string} bar.module `module` property threw an error in eslint-plugin-jsdoc<37.5.0
	 * @return {number}
	 */
	APP.method = function ( bar ) {
		return bar;
	};
	/* eslint-enable jsdoc/tag-lines */

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

	/* eslint-disable jsdoc/check-alignment */
	/**
	* @param {number} a
	 */
	/* eslint-enable jsdoc/check-alignment */

	/* eslint-disable jsdoc/check-alignment */
	/**
	  * @param {number} a
	 */
	/* eslint-enable jsdoc/check-alignment */

	/* eslint-disable jsdoc/check-alignment */
	/**
	 * @param {number} a
	*/
	/* eslint-enable jsdoc/check-alignment */

	/* eslint-disable jsdoc/no-undefined-types, jsdoc/check-types */
	/**
	 * @param {Undefined} d
	 */
	/* eslint-enable jsdoc/no-undefined-types, jsdoc/check-types */

	/* eslint-disable jsdoc/no-undefined-types, jsdoc/check-types */
	/**
	 * @param {Null} e
	 */
	/* eslint-enable jsdoc/no-undefined-types, jsdoc/check-types */

	/* eslint-disable jsdoc/no-undefined-types, jsdoc/check-types */
	/**
	 * @param {array} g
	 */
	/* eslint-enable jsdoc/no-undefined-types, jsdoc/check-types */

	/* eslint-disable jsdoc/no-undefined-types, jsdoc/check-types */
	/**
	 * @param {date} i
	 */
	/* eslint-enable jsdoc/no-undefined-types, jsdoc/check-types */

	/* eslint-disable jsdoc/no-undefined-types, jsdoc/check-types */
	/**
	 * @param {regexp} j
	 */
	/* eslint-enable jsdoc/no-undefined-types, jsdoc/check-types */

	/* eslint-disable jsdoc/no-undefined-types, jsdoc/check-types */
	/**
	 * @param {error}
	 */
	/* eslint-enable jsdoc/no-undefined-types, jsdoc/check-types */

	/* eslint-disable jsdoc/check-types */
	/**
	 * @param {Boolean} a
	 */
	/* eslint-enable jsdoc/check-types */

	/* eslint-disable jsdoc/check-types */
	/**
	 * @param {Number} b
	 */
	/* eslint-enable jsdoc/check-types */

	/* eslint-disable jsdoc/check-types */
	/**
	 * @param {String} c
	 */
	/* eslint-enable jsdoc/check-types */

	/* eslint-disable jsdoc/check-types */
	/**
	 * @param {object} f
	 */
	/* eslint-enable jsdoc/check-types */

	/* eslint-disable jsdoc/check-types */
	/**
	 * @param {function} h
	 */
	/* eslint-enable jsdoc/check-types */

	/* eslint-disable jsdoc/check-tag-names */
	/**
	 * @virtual
	 */
	/* eslint-enable jsdoc/check-tag-names */

	/* eslint-disable jsdoc/check-tag-names */
	/**
	 * @augments String
	 */
	/* eslint-enable jsdoc/check-tag-names */

	/* eslint-disable jsdoc/check-tag-names */
	/**
	 * @defaultvalue
	 */
	/* eslint-enable jsdoc/check-tag-names */

	/* eslint-disable jsdoc/check-tag-names */
	/**
	 * @host String
	 */
	/* eslint-enable jsdoc/check-tag-names */

	/* eslint-disable jsdoc/check-tag-names */
	/**
	 * @fileoverview Description.
	 */
	/* eslint-enable jsdoc/check-tag-names */

	/* eslint-disable jsdoc/check-tag-names */
	/**
	 * @overview Description.
	 */
	/* eslint-enable jsdoc/check-tag-names */

	/* eslint-disable jsdoc/check-tag-names */
	/**
	 * @emits Event
	 */
	/* eslint-enable jsdoc/check-tag-names */

	/* eslint-disable jsdoc/check-tag-names */
	/**
	 * @function
	 */
	/* eslint-enable jsdoc/check-tag-names */

	/* eslint-disable jsdoc/check-tag-names */
	/**
	 * @func
	 */
	/* eslint-enable jsdoc/check-tag-names */

	/* eslint-disable jsdoc/check-tag-names */
	/**
	 * @var
	 */
	/* eslint-enable jsdoc/check-tag-names */

	/* eslint-disable jsdoc/check-tag-names */
	/**
	 * @arg {number} a
	 */
	/* eslint-enable jsdoc/check-tag-names */

	/* eslint-disable jsdoc/check-tag-names */
	/**
	 * @argument {number} b
	 */
	/* eslint-enable jsdoc/check-tag-names */

	/* eslint-disable jsdoc/check-tag-names */
	/**
	 * @prop {number} c
	 */
	/* eslint-enable jsdoc/check-tag-names */

	/* eslint-disable jsdoc/check-tag-names */
	/**
	 * @returns {number}
	 */
	/* eslint-enable jsdoc/check-tag-names */

	/* eslint-disable jsdoc/check-tag-names */
	/**
	 * @exception {Error}
	 */
	/* eslint-enable jsdoc/check-tag-names */

	/* eslint-disable jsdoc/check-tag-names */
	/**
	 * @const
	 */
	/* eslint-enable jsdoc/check-tag-names */

	/* eslint-disable jsdoc/check-tag-names */
	/**
	 * @desc
	 */
	/* eslint-enable jsdoc/check-tag-names */

	/* eslint-disable jsdoc/check-tag-names */
	/**
	 * @linkcode
	 */
	/* eslint-enable jsdoc/check-tag-names */

	/* eslint-disable jsdoc/check-tag-names */
	/**
	 * @linkplain
	 */
	/* eslint-enable jsdoc/check-tag-names */

	/* eslint-disable jsdoc/check-tag-names */
	/**
	 * @yields
	 */
	/* eslint-enable jsdoc/check-tag-names */

	/* eslint-disable jsdoc/check-tag-names */
	/**
	 * @context
	 */
	/* eslint-enable jsdoc/check-tag-names */

	/* eslint-disable jsdoc/check-tag-names */
	/**
	 * @alternateClassName
	 */
	/* eslint-enable jsdoc/check-tag-names */

	// @type is allowed in jsdoc and jsduck

}( this ) );
