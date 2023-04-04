// Valid: linebreak-style
// Valid: max-len
// Valid: max-statements-per-line
// Valid: wrap-iife
// Valid: semi
// Valid: semi-spacing
// Valid: semi-style
// Valid: unicode-bom
( function ( global ) {
	var APP;

	// Valid: spaced-comment
	// Example
	/* Example */

	// Valid: no-use-before-define (nofunc)
	upHere( 1 );

	// Empty function declaration
	function upHere() {}

	// Valid: camelcase (function, param, var, propery, method)
	// Valid: func-call-spacing
	function upHereAlso( yArg ) {
		var rArg = yArg.fooBar;
		return rArg + yArg.getQuux();
	}

	// Valid: one-var
	// Valid: vars-on-top
	var hasOwn = Object.prototype.hasOwnProperty;
	var APPHasOwnProperty = Object.prototype.hasOwnProperty.call( APP, 'hasOwn' );

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
		var name, inline, bar;

		// Valid: max-len
		bar = 'This is a long string that is indeed so long that it breaches the line length rules and thus would trigger a warning were it not for the over-ride.';

		// Valid: max-len
		// eslint-comments-starting-with-"eslint-"-are-allowed-to-be-any-length---------------------------
		// stylelint-comments-starting-with-"stylelint-"-are-also-allowed-to-be-any-length---------------------------

		// Valid: space-infix-ops
		this.total = upHere() + id;
		name = options.bar ? upHereAlso( id ) : id;

		// Valid: brace-style
		// Valid: dot-notation
		// Valid: keyword-spacing
		// Valid: space-before-blocks
		if ( options.quux ) {
			name += options.quux;
		} else if ( options.default ) {
			name += options.default;
		// Valid: computed-property-spacing
		} else if ( options[ 'property-name' ] ) {
			name += 'property-name';
		}

		// Valid: operator-linebreak
		// Valid: space-infix-ops
		if ( bar &&
			bar.hasData() &&
			bar.getName() !== name &&
			!bar.isQuux()
		) {
			return;
		}

		// Valid: eqeqeq
		// Valid: yoda (never)
		if ( bar === undefined ) {
			return;
		}

		// Valid: block-spacing
		// Valid: space-before-function-paren
		// Valid: space-in-parens
		inline = function ( items ) {
			return items.slice();
		};

		inline = function ( items ) {
			items = items.slice();
			items.pop();
			return items;
		};

		inline = function named( items ) {
			try {
				return APP.loop( items );
			} catch ( e ) {
				// Valid: block-scoped-var
				var e2 = upHere( e );
				upHereAlso( e2 );
			}
			return null;
		};

		// Valid: comma-style
		this.data = [
			bar,
			inline()
		];

		// Valid: array-callback-return
		[].map( function ( x ) {
			return upHere( x );
		} );

		// Valid: array-bracket-spacing
		// Valid: comma-spacing
		// Off: security/detect-object-injection
		this.items = [ 'foo', 'bar', inline ];
	};

	APP.unaryWords = function ( obj ) {
		// Valid: space-unary-ops
		obj.type = typeof obj;
		delete obj.type;
	};

	APP.loop = function ( items ) {
		// Valid: comma-dangle
		// Valid: comma-spacing
		// Valid: comma-style
		// Valid: curly
		// Valid: one-var
		// Valid: vars-on-top
		var i, len, item, key,
			// Valid: prefer-numeric-literals
			j = 1,
			ret = {};

		// Valid: for-direction
		for ( i = 0, len = items.length; i < len; i++ ) {

			if ( items[ i ] !== null ) {

				item = items[ i ];
				break;
			}
		}

		if ( !item ) {
			return;
		}

		for ( key in item ) {
			if ( APPHasOwnProperty || hasOwn.call( item, key ) ) {
				// Valid: computed-property-spacing

				ret[ key ] = new APP.Example( item[ key ] );
			}
		}

		do {
			j = i++;
			APP.fall( --j );
		} while ( i < 5 );

		return ret;
	};

	/**
	 * @param {boolean|number} code
	 * @return {null|undefined}
	 */
	APP.fall = function ( code ) {
		// Valid: switch-colon-spacing
		// Valid: indent (SwitchCase)
		switch ( code ) {
			case 200:
				break;
			default:
				return null;
		}
	};

	/**
	 * @param {number} a
	 * @param {number} b
	 * @return {number}
	 */
	APP.sum = function ( a, b ) {
		return a + b;
	};

	APP.cast = function ( options, val ) {
		options.enable = !!val;
		options.disable = Boolean( val );

		// Valid: prefer-regex-literals
		options.pattern = /abc/i;

		options.posX = +val;
		options.posY = Number( val );

		options.title = String( val );

		return options.title.indexOf( '.' ) !== -1;
	};

	APP.fetch = function () {
		// Valid: new-cap
		// Valid: new-parens
		var eg = new APP.Example();
		return eg.Deferred();
	};

	APP.example = new APP.Example( 'banana', {
		// Valid: key-spacing
		// Valid: quote-props
		// Valid: quotes
		first: 'Who',
		default: 'is',
		multiStr: ' \
',
		null: 'there?',
		// Valid: object-curly-spacing
		second: { value: { of: 'What' } },
		third: {
			value: {
				of: 'I don\'t know'
			}
		},
		// Valid: quotes
		fourth: "Who's coming to tea?"
	} );

	APP.example( 'banana' )
		.done( function () { } );

	// Valid: dot-location
	APP.example( 'banana' )
		.done( function () {} )
		.fail( function () {} );

	APP.$head
		.appendTo( APP.$element );

	global.APP = APP;

}( this ) );

// Valid: eol-last
