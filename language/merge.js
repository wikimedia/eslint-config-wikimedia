module.exports = function ( childRules, parentRules ) {
	// Start off with a standard merge
	const mergedRules = Object.assign( {}, parentRules, childRules );

	// For the specified keys, concatenate the lists
	[ 'no-restricted-syntax', 'no-restricted-properties' ].forEach( function ( key ) {
		// If either is unset, return the other
		if ( !parentRules.rules[ key ] ) {
			mergedRules.rules[ key ] = childRules.rules[ key ];
		} else if ( !childRules.rules[ key ] ) {
			mergedRules.rules[ key ] = parentRules.rules[ key ];
		} else {
			// If both are set, merge. Use the 0th value from parentRules arbitrarily,
			// but it is assumed it is "error" for both.
			mergedRules.rules[ key ] = ( parentRules.rules[ key ] || [] )
				.concat( ( childRules.rules[ key ] || [] ).slice( 1 ) );
		}
	} );
	return mergedRules;
};
