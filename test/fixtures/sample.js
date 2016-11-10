// Rule: wrap-iife
( function ( global ) {
	var APP,
		hasOwn = Object.prototype.hasOwnProperty;

	// Rule: spaced-comment
	// Example

	// Empty function declaration
	function upHere() {}

	// Non-empty function declaration
	function upHereAlso( y ) {
		return y;
	}

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

		// Rule: space-infix-ops
		this.total = upHere() + id;

		name = options.bar ? upHereAlso( id ) : id;

		// Rule: brace-style
		// Rule: dot-notation
		// Rule: keyword-spacing
		// Rule: space-before-blocks
		if ( options.quux ) {
			name += options.quux;
		} else if ( options.quux ) {
			name += options.quux;
		} else if ( options[ 'default' ] ) {
			name += 'default';
		}

		// Rule: operator-linebreak
		// Rule: space-infix-ops
		if ( bar &&
			bar.hasData() &&
			bar.getName() !== name &&
			!bar.isQuux()
		) {
			return;
		}

		// Rule: block-spacing
		// Rule: space-before-function-paren
		// Rule: space-in-parens
		inline = function ( items ) { return items.slice(); };

		inline = function ( items ) {
			items = items.slice();
			items.pop();
			return items;
		};

		inline = function named( items ) {
			try {
				return APP.loop( items );
			} catch ( e ) {
			}
			return null;
		};

		// Rule: comma-style
		this.data = [
			bar,
			inline()
		];

		// Rule: array-bracket-spacing
		// Rule: comma-spacing
		this.items = [ 'foo', 'bar' ];
	};

	APP.unaryWords = function ( obj ) {
		// Rule: space-unary-ops
		obj.type = typeof obj;
		delete obj.type;
	};

	APP.loop = function ( items ) {
		// Rule: comma-spacing
		// Rule: comma-style
		// Rule: one-var
		var i, len, item, key,
			j = 1,
			ret = {};

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
			if ( hasOwn.call( item, key ) ) {
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
		// Rule: indent (SwitchCase)
		switch ( code ) {
			case 200:
				break;
			default:
				return null;
		}
	};

	APP.cast = function ( options, val ) {
		options.enable = !!val;
		options.disable = Boolean( val );

		options.posX = +val;
		options.posY = Number( val );

		options.title = String( val );

		return options.title.indexOf( '.' ) !== -1;
	};

	APP.fetch = function () {
		// Rule: new-cap
		var eg = new APP.Example();
		return eg.Deferred();
	};

	APP.example = new APP.Example( 'banana', {
		// Rule: key-spacing
		// Rule: quote-props
		// Rule: quotes
		first: 'Who',
		second: 'What',
		third: 'I don\'t know',
		'default': 'Legacy'
	} );

	APP.example( 'banana' )
		.done( function () { } );

	// Rule: dot-location
	APP.example( 'banana' )
		.done( function () {} )
		.fail( function () {} );

	APP.$head
		.appendTo( APP.$element );

	global.APP = APP;

}( this ) );
