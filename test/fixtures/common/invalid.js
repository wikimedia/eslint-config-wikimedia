// eslint-disable-next-line no-implicit-globals, no-unused-vars
var APP;
// eslint-disable-next-line wrap-iife
( function ( global ) {
	// eslint-disable-next-line no-shadow
	var APP;
	var upHere = function ( yArg ) {
		var rArg = yArg.fooBar;
		if ( rArg ) {
			// eslint-disable-next-line unicorn/throw-new-error
			throw Error( 'err' );
		}
		// eslint-disable-next-line semi
		return rArg + yArg.getQuux()
	};

	// eslint-disable-next-line unicorn/prefer-date-now
	upHere = new Date().getTime();

	// eslint-disable-next-line unicorn/prefer-string-slice
	upHere.substring( 0, 3 );

	// eslint-disable-next-line spaced-comment
	//Example

	// eslint-disable-next-line spaced-comment
	/*Example*/

	// eslint-disable-next-line spaced-comment
	/* Example*/

	APP.Example = function ( id, options ) {
		// no-shadow triggered by hoised variable:
		// eslint-disable-next-line no-shadow
		var name = 'foo'
			// eslint-disable-next-line operator-linebreak
			+ 'bar',
			// eslint-disable-next-line key-spacing
			bar = { a : 1 }
			// eslint-disable-next-line camelcase, comma-style
			, camel_case;

		// eslint-disable-next-line array-bracket-spacing, comma-dangle, comma-spacing
		bar = [0, 1,];

		// eslint-disable-next-line space-before-blocks, yoda
		if ( 3 === bar ){
			// eslint-disable-next-line block-spacing, brace-style, camelcase
			return camel_case;}

		// eslint-disable-next-line no-use-before-define
		upHere( i );

		var i;
		// eslint-disable-next-line max-statements-per-line
		if ( name ) { return i; }

		// eslint-disable-next-line curly, dot-location
		if ( bar ) return i.
			prop;

		// eslint-disable-next-line no-tabs
		name = options.bar ? upHere( id ) : id; //	Wow!

		// eslint-disable-next-line no-constant-condition
		if ( true || options.quux ) {
			name += options.quux;
		// eslint-disable-next-line dot-notation, computed-property-spacing
		} else if ( options['default' ] ) {
		// eslint-disable-next-line no-unsafe-negation, keyword-spacing
		}else if ( !'default' in options ) {
			// eslint-disable-next-line no-use-before-define
			name += named();
		}

		// eslint-disable-next-line no-empty
		if ( name ) {
		}

		// eslint-disable-next-line no-bitwise
		if ( ( bar | options.quux ) ) {
			// eslint-disable-next-line no-eval
			eval( '(' + name + ')' );
			return;
		}

		// eslint-disable-next-line space-before-function-paren, space-in-parens
		function named (items ) {
			var e = items.event;
			try {
				return APP.loop( items );
			} catch ( err ) {
			}
			return e;
		}

		// eslint-disable-next-line no-unreachable-loop
		for ( i = 0
			// eslint-disable-next-line semi-style
			; i < 5;
			// eslint-disable-next-line space-unary-ops
			i ++ ) {
			// eslint-disable-next-line no-loop-func, no-inner-declarations
			function inline( a ) {
				// eslint-disable-next-line space-infix-ops
				return a+ i;
			}
			inline( i );
			break;
		}

		// eslint-disable-next-line no-loss-of-precision
		i = 5123000000000000000000000000001;

		// eslint-disable-next-line no-unused-labels
		data:
		// eslint-disable-next-line no-unused-expressions, no-sequences, func-call-spacing
		bar, named ();

		// eslint-disable-next-line no-array-constructor, new-parens
		bar = new Array;
		// eslint-disable-next-line no-new-func, quotes
		bar = new Function( 'a', "return " + name + ";" );
		// eslint-disable-next-line no-new-object
		bar = new Object();
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
			// eslint-disable-next-line no-self-compare, eqeqeq
			bar = name == name;
		}

		// eslint-disable-next-line no-trailing-spaces
		options.spaces = 'foo';  

		// eslint-disable-next-line no-underscore-dangle
		options.lo_ = 'dash';

		// eslint-disable-next-line no-whitespace-before-property
		options. space = Infinity;

		function undef() {
			// eslint-disable-next-line no-undef-init, unicorn/no-useless-undefined
			var b = undefined;
			return b;
		}

		function restrict( a ) {
			// eslint-disable-next-line no-shadow-restricted-names
			var undefined = a;
			// eslint-disable-next-line unicorn/no-useless-undefined
			return undefined;
		}

		// eslint-disable-next-line no-useless-call
		bar = restrict.call( null ) + undef();

		// eslint-disable-next-line no-unmodified-loop-condition
		while ( bar ) {
			var baz = named( bar );
		}
		// eslint-disable-next-line block-scoped-var
		upHere( baz );

		// eslint-disable-next-line array-callback-return
		[].map( function ( x ) {
			upHere( x );
		} );

	};

	var name = 'foo';
	upHere( name );

	APP.bound = function ( obj ) {
		return obj.key;
	// eslint-disable-next-line no-extra-bind
	}.bind( APP );

	APP.loop = function ( items ) {
		var i,
			ret = [],
			// eslint-disable-next-line no-caller
			self = arguments.callee;

		// eslint-disable-next-line no-label-var, for-direction, no-unreachable-loop
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

	// eslint-disable-next-line quote-props, object-curly-spacing
	APP.example = {'default': 'Legacy'
	};

	// eslint-disable-next-line no-multi-spaces
	APP.defaults =  {
		// eslint-disable-next-line no-floating-decimal
		decimal: .4,
		/* eslint-disable no-multiple-empty-lines */


		/* eslint-enable no-multiple-empty-lines */
		// eslint-disable-next-line no-useless-concat
		concat: '4' + '2',
		// eslint-disable-next-line no-octal-escape
		octal: '\251',
		// eslint-disable-next-line no-nonoctal-decimal-escape
		nonoctal: '\8\9',
		// eslint-disable-next-line prefer-numeric-literals
		numlit: parseInt( '1F7', 16 ),
		// eslint-disable-next-line prefer-regex-literals
		regex: new RegExp( 'abc', 'i' ),
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

	// eslint-disable-next-line no-prototype-builtins
	APP.hasBarProperty = APP.hasOwnProperty( 'bar' );

} )( this );
/* eslint-disable eol-last */