// Rule: jsdoc/check-alignment
// Rule: jsdoc/check-indentation
// Rule: jsdoc/check-param-names
// Rule: jsdoc/check-property-names
// Rule: jsdoc/check-tag-names
// Rule: jsdoc/check-types
// Rule: jsdoc/implements-on-classes
// Rule: jsdoc/newline-after-description
// Rule: jsdoc/valid-types
( function ( global ) {
	var APP;

	/**
	 * Example description.
	 *
	 * @class
	 *
	 * @constructor
	 * @param {string} id
	 * @param {Object} options
	 */
	APP.Example = function ( id, options ) {
		this.id = id;
		this.options = options;
	};

	/**
	 * @param {boolean|number} code
	 * @return {null|undefined}
	 */
	APP.fall = function ( code ) {
		return code || null;
	};

	/**
	 * @param {number} a
	 * @param {number} b
	 * @return {number}
	 */
	APP.sum = function ( a, b ) {
		return a + b;
	};

	/**
	 * @param {boolean} a
	 * @param {number} b
	 * @param {string} c
	 * @param {undefined} d
	 * @param {null} e
	 * @param {Object} f
	 * @param {Array} g
	 * @param {Function} h
	 * @param {Date} i
	 * @param {RegExp} j
	 * @return {Error}
	 */
	APP.JSDocTypes = function ( a, b, c, d, e, f, g, h, i, j ) {
		return a || b || c || d || e || f || g || h || i || j;
	};

	/**
	 * {@link APP}
	 * {@link APP}
	 *
	 * @abstract
	 * @extends String
	 * @class
	 * @constructor
	 * @constructs
	 * @const
	 * @default
	 * @desc Description.
	 * @external String
	 * @file Description.
	 * @fires Event
	 * @function
	 * @method
	 * @member
	 * @param {number} a
	 * @param {number} b
	 * @property {number} c
	 * @return {number}
	 * @throws {Error}
	 * @yield
	 */
	APP.JSDocTags = function ( a, b ) {
		return a || b;
	};

}( this ) );
