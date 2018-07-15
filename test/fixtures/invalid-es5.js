/* eslint-env es5, browser, node */
// eslint-disable-next-line no-implicit-globals, no-unused-vars
var APP;
( function ( global ) {
	var APP;
	// eslint-disable-next-line one-var
	var upHere = function ( yArg ) {
		var rArg = yArg.fooBar;
		return rArg + yArg.getQuux();
	};

	// eslint-disable-next-line spaced-comment
	//Example

	APP.Example = function ( id, options ) {
		var i, name, bar;

		name = options.bar ? upHere( id ) : id;

		// eslint-disable-next-line no-alert
		alert( name );

		// eslint-disable-next-line no-constant-condition
		if ( true || options.quux ) {
			name += options.quux;
		// eslint-disable-next-line no-empty, dot-notation
		} else if ( options[ 'default' ] ) {
		// eslint-disable-next-line no-unsafe-negation
		} else if ( !'default' in options ) {
			// eslint-disable-next-line no-use-before-define
			name += named();
		}

		// eslint-disable-next-line no-bitwise
		if ( ( bar | options.quux ) ) {
			// eslint-disable-next-line no-eval
			eval( '(' + name + ')' );
			// eslint-disable-next-line no-implied-eval
			setTimeout( name + '();' );
			return;
		}

		function named( items ) {
			var e = items.event;
			try {
				return APP.loop( items );
			} catch ( e ) {
			}
			return e;
		}

		for ( i = 0
			// eslint-disable-next-line semi-style
			; i < 5;
			i++ ) {
			// eslint-disable-next-line no-loop-func, no-inner-declarations
			function inline( a ) {
				return a + i;
			}
			inline( i );
			break;
		}

		// eslint-disable-next-line no-unused-labels
		data:
		// eslint-disable-next-line no-unused-expressions, no-sequences
		bar, named();

		// eslint-disable-next-line no-array-constructor
		bar = new Array();
		// eslint-disable-next-line no-new-func
		bar = new Function( 'a', 'return ' + name + ';' );
		// eslint-disable-next-line no-new-object
		bar = new Object();
		// eslint-disable-next-line no-new-require, new-cap
		bar = new require( 'events' );
		// eslint-disable-next-line no-new-wrappers
		bar = new String( 'events' );

		// eslint-disable-next-line max-len
		// This is a ludicrously long comment that is so long that one can't help but wonder as to whether the writer is a fool or merely testing other developers.

		// eslint-disable-next-line no-new
		new APP.Example();

		// eslint-disable-next-line no-with
		with ( bar ) {
			// eslint-disable-next-line no-void
			bar = void 0;
			// eslint-disable-next-line no-proto
			bar = APP.Example.__proto__;
			// eslint-disable-next-line no-self-compare
			bar = name === name;
		}

		// eslint-disable-next-line no-trailing-spaces
		options.spaces = 'foo'; 

		// eslint-disable-next-line no-underscore-dangle
		options.lo_ = 'dash';

		// eslint-disable-next-line no-whitespace-before-property
		options. space = Infinity;

		function undef() {
			// eslint-disable-next-line no-undef-init
			var b = undefined;
			return b;
		}

		function restrict( a ) {
			// eslint-disable-next-line no-shadow-restricted-names
			var undefined = a;
			return undefined;
		}

		// eslint-disable-next-line no-useless-call
		bar = restrict.call( null ) + undef();

		// eslint-disable-next-line no-unmodified-loop-condition
		while ( bar ) {
			named( bar );
		}
	};

	APP.bound = function ( obj ) {
		return obj.key;
	// eslint-disable-next-line no-extra-bind
	}.bind( APP );

	APP.loop = function ( items ) {
		var i,
			ret = [],
			// eslint-disable-next-line no-caller
			self = arguments.callee;

		// eslint-disable-next-line no-label-var, for-direction
		ret: for ( i = 0; i < items.length; i-- ) {
			if ( items[ i ] !== null ) {
				ret.push( self( items[ i ] ) );
				// eslint-disable-next-line no-extra-label
				break ret;
			} else {
				// eslint-disable-next-line no-throw-literal
				throw 'Error';
			}
		}

		return ret;
	};

	APP.fall = function ( code ) {
	/* eslint-disable switch-colon-spacing, semi-spacing, semi-style */
		switch ( code ) {
			case 100 :break ;
			// eslint-disable-next-line indent
		case 200:
			// eslint-disable-next-line indent
			break
				;
		}
	/* eslint-enable switch-colon-spacing, semi-spacing, semi-style */
	};

	APP.fetch = function () {
		// eslint-disable-next-line new-cap
		var eg = new APP.example();
		// eslint-disable-next-line no-return-assign
		return APP.singleton = eg.Deferred();
	};

	// eslint-disable-next-line no-extend-native
	String.prototype.makeExample = function () {
		return new APP.Example( this );
	};

	// eslint-disable-next-line no-implicit-globals, no-global-assign
	Date = APP.Date;

	// eslint-disable-next-line no-multi-spaces
	APP.defaults =  {
		// eslint-disable-next-line no-floating-decimal
		decimal: .4,
		// eslint-disable-next-line no-multi-str
		multiStr: ' \
',
		/* eslint-disable no-multiple-empty-lines */


		/* eslint-enable no-multiple-empty-lines */
		// eslint-disable-next-line no-useless-concat
		concat: '4' + '2',
		// eslint-disable-next-line no-octal-escape
		octal: '\251',
		// eslint-disable-next-line no-script-url
		script: 'javascript:foo();',
		// eslint-disable-next-line no-unneeded-ternary
		tern: APP.enabled ? true : false
	};

	APP.cast = function ( options, val ) {
		options.enable = !!val;
		options.disable = Boolean( val );

		options.posX = +val;
		options.posY = Number( val );

		// eslint-disable-next-line no-implicit-coercion
		options.title = '' + val;
		options.title = String( val );
	};

	global.APP = APP;

	// eslint-disable-next-line valid-jsdoc
	/** @returns {undefined} */
	APP.stop = function () {
		return '@returns instead of @return';
	};

	// eslint-disable-next-line valid-jsdoc
	/**
	 * @param {number} a
	 * @return {undefined}
	 */
	APP.multiply = function ( a, b ) {
		return a * b.undocumented;
	};

	// eslint-disable-next-line no-prototype-builtins
	APP.hasBarProperty = APP.hasOwnProperty( 'bar' );

	/* eslint-disable valid-jsdoc */
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
	APP.typing = function ( a, b, c, d, e, f, g, h, i, j ) {
		return a || b || c || d || e || f || g || h || i || j;
	};
	/* eslint-enable valid-jsdoc */

}( this ) );
