// TODO: Give examples of these rules being off:
// Off: jsdoc/check-syntax
// Off: jsdoc/check-values
// Off: jsdoc/empty-tags
// Off: jsdoc/match-description
// Off: jsdoc/no-bad-blocks
// Off: jsdoc/no-defaults
// Off: jsdoc/no-types
// Off: jsdoc/require-file-overview
// Off: jsdoc/require-hyphen-before-param-description
// Off: jsdoc/require-property
( function () {
	// Off: jsdoc/require-property-description
	// Off: jsdoc/require-property-name
	/**
	 * @property {Object}
	 */
	var APP;

	// Off: jsdoc/require-example
	// Off: jsdoc/require-jsdoc
	APP.noDoc = function ( foo ) {
		return foo;
	};

	// Off: jsdoc/require-description-complete-sentence
	// Off: jsdoc/require-param-description
	/**
	 * Description
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

	// Off: jsdoc/require-returns-description
	// Off: jsdoc/require-description
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

	// Off: jsdoc/check-examples
	/**
	 *     @example
	 *     invalid(style)
	 *
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
	 * @param {HTMLElement} el HTMLElement is a global provided by ./client
	 * @param {HTMLIFrameElement} iFrame
	 * @param {Node} domNode
	 * @return {Error}
	 */
	APP.JSDocTypes = function ( a, b, c, d ) {
		return a || b || c || d;
	};

	/**
	 * {@link APP}
	 * {@link APP}
	 *
	 * @this Foo
	 * @alias Bar
	 * @typedef Baz
	 * @abstract
	 * @extends String
	 * @class
	 * @constructor
	 * @constructs
	 * @const
	 * @default
	// Off: jsdoc/check-indentation
	 * @desc Multi-
	 *       line
	 * @external String
	 * @file Multi-
	 *       line
	 * @fires Event
	 * @method
	 * @member
	 * @param {number} a
	 * @param {number} b Multi-
	 *                   line
	 * @property {number} c Multi-
	 *                      line
	 * @return {number} Multi-
	 *                  line
	 * @throws {Error} Multi-
	 *                 line
	 * @yield {number} Multi-
	 *                 line
	 */
	APP.JSDocTags = function ( a, b ) {
		return a || b;
	};

}( this ) );
