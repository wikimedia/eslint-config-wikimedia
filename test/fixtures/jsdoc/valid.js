// TODO: Give examples of these rules being off:
// Off: jsdoc/check-syntax
// Off: jsdoc/check-template-names
// Off: jsdoc/check-values
// Off: jsdoc/convert-to-jsdoc-comments
// Off: jsdoc/empty-tags
// Off: jsdoc/escape-inline-tags
// Off: jsdoc/imports-as-dependencies
// Off: jsdoc/lines-before-block
// Off: jsdoc/match-description
// Off: jsdoc/match-name
// Off: jsdoc/no-bad-blocks
// Off: jsdoc/no-defaults
// Off: jsdoc/no-missing-syntax
// Off: jsdoc/no-restricted-syntax
// Off: jsdoc/no-types
// Off: jsdoc/prefer-import-tag
// Off: jsdoc/reject-any-type
// Off: jsdoc/reject-function-type
// Off: jsdoc/require-tags
// Off: jsdoc/require-template
// Off: jsdoc/require-template-description
// Off: jsdoc/require-file-overview
// Off: jsdoc/require-hyphen-before-param-description
// Off: jsdoc/require-next-description
// Off: jsdoc/require-next-type
// Off: jsdoc/require-property
// Off: jsdoc/require-throws-description
// Off: jsdoc/require-yields-description
// Off: jsdoc/ts-method-signature-style
// Off: jsdoc/ts-no-empty-object-type
// Off: jsdoc/ts-no-unnecessary-template-expression
// Off: jsdoc/ts-prefer-function-type
// This rule is doesn't work with our preference
// to use "yield" over "yields":
// https://github.com/gajus/eslint-plugin-jsdoc/issues/1559
// Off: jsdoc/require-yields-type
// Off: jsdoc/type-formatting
/* global Foo, APP */
( function () {
	// Off: jsdoc/require-property-description
	// Off: jsdoc/require-property-name
	/**
	 * @property {Object}
	 */
	let APP;

	// Valid: settings.jsdoc.tagNamePreference
	// Off: jsdoc/sort-tags
	/**
	 * Non-default aliases:
	 *
	 * @extends Foo
	 * @method
	 * @link
	 * @yield
	 *
	 * Extra tags:
	 *
	 * @cfg
	 * @chainable
	 * @constructor
	 * @inheritable
	 * @localdoc
	 * @singleton
	 * @uses
	 */

	// Off: jsdoc/require-example
	// Off: jsdoc/require-jsdoc
	APP.noDoc = function ( foo ) {
		return foo;
	};

	// Off: jsdoc/require-description-complete-sentence
	// Off: jsdoc/require-param-description
	// Off: jsdoc/text-escaping
	/**
	 * Description
	 *
	 * We do not currently enforce jsdoc/text-escaping:
	 * - <a> &gt; &#xabc; `test`
	 *
	 * jsdoc/no-multi-asterisks with whitespace, allowWhitespace=true
	 * This does two things
	 * * Thing one
	 * * Thing two
	 *
	 * And that is a
	 * *bold* change
	 *
	 * @class
	 *
	 * @mixes Foo
	 * @param {string} id
	 * @param {Object} options
	 */
	APP.Example = function ( id, options ) {
		this.id = id;
		this.options = options;
	};

	// Off: jsdoc/informative-docs
	// Off: jsdoc/require-returns-description
	// Off: jsdoc/require-description
	/**
	 * @param {boolean|number} code The code
	 * @return {null|undefined}
	 */
	APP.fall = function ( code ) {
		return code || null;
	};

	/**
	 * @param {number} a
	 * @param {number} [b=5]
	 * @return {number}
	 */
	APP.sum = function ( a, b ) {
		b = b || 5;
		return a + b;
	};

	// Off: jsdoc/require-throws
	APP.err = function () {
		throw new Error( 'Oops' );
	};

	// Off: jsdoc/check-examples
	// Off: jsdoc/check-line-alignment
	/**
	 * @example
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
	 * @param {jQuery} k
	 * @param {jQuery.Event} l
	 * @param {HTMLElement} el HTMLElement is a global provided by the browser environment
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
	 * @constant
	 * @default
	 * // Off: jsdoc/check-indentation
	 * @description Multi-
	 *              line
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
	 * @ignore
	 * @internal
	 * @stable
	 */
	APP.JSDocTags = function ( a, b ) {
		return a || b;
	};

}( this ) );
