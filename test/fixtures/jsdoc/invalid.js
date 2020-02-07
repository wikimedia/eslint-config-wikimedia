var APP;
( function ( global ) {
	var APP;

	/* eslint-disable jsdoc/no-undefined-types */
	/** @return {undefined} */
	APP.start = function () {
		return '@returns instead of @return';
	};

	/* eslint-disable jsdoc/check-tag-names, jsdoc/check-types */
	/** @returns {Undefined} */
	APP.stop = function () {
		return '@returns instead of @return';
	};

	// eslint-disable-next-line jsdoc/check-alignment
	/**
	* @param {number} a
	  * @return {Undefined}
	 */
	APP.multiply = function ( a, b ) {
		return a * b.undocumented;
	};

	/* eslint-disable jsdoc/check-types, jsdoc/check-alignment */
	/**
	 * @param {Boolean} a
	 * @param {Number} b
	 * @param {String} c
	 * @param {Undefined} d
	 * @param {Null} e
	 * @param {object} f
	 * @param {array} g
	 * @param {function} h
	 * @param {date} i
	 * @param {regexp} j
	 * @return {error}
	*/
	APP.JSDocTypes = function ( a, b, c, d, e, f, g, h, i, j ) {
		return a || b || c || d || e || f || g || h || i || j;
	};

	/**
	 * {@linkcode APP}
	 * {@linkplain APP}
	 *
	 * @virtual
	 * @augments String
	 * @constant
	 * @defaultvalue
	 * @description Description.
	 * @host String
	 * @fileoverview Description.
	 * @overview Description.
	 * @emits Event
	 * @function
	 * @var
	 * @arg {number} a
	 * @argument {number} b
	 * @prop {number} c
	 * @returns {number}
	 * @exception {Error}
	 * @yields
	 */
	APP.JSDocTags = function ( a, b ) { return a || b; };
	/* eslint-enable jsdoc/check-tag-names, jsdoc/check-types, jsdoc/check-alignment, jsdoc/no-undefined-types */

}( this ) );
